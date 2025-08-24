import { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Globe, Flag, Zap, TrendingUp } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { searchEntities, type CityData, type CountryData } from '@/data/completeWorldData';

interface SearchResult {
  cities: CityData[];
  countries: CountryData[];
}

interface InteractiveSearchProps {
  onCitySelect: (city: CityData) => void;
  onCountrySelect: (country: CountryData) => void;
  placeholder?: string;
}

const InteractiveSearch = ({ onCitySelect, onCountrySelect, placeholder = "Search cities, countries worldwide..." }: InteractiveSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult>({ cities: [], countries: [] });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const searchResults = searchEntities(searchTerm);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults({ cities: [], countries: [] });
      setIsOpen(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = results.cities.length + results.countries.length;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % totalItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev <= 0 ? totalItems - 1 : prev - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        if (selectedIndex < results.cities.length) {
          handleCitySelect(results.cities[selectedIndex]);
        } else {
          handleCountrySelect(results.countries[selectedIndex - results.cities.length]);
        }
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleCitySelect = (city: CityData) => {
    setSearchTerm(city.name);
    setIsOpen(false);
    onCitySelect(city);
  };

  const handleCountrySelect = (country: CountryData) => {
    setSearchTerm(country.name);
    setIsOpen(false);
    onCountrySelect(country);
  };

  const getCryptoIndicator = (cryptoRegulation?: string, cryptoFriendly?: boolean) => {
    if (cryptoFriendly || cryptoRegulation === 'friendly') {
      return <Zap className="w-3 h-3 text-gold animate-hologram" />;
    }
    return null;
  };

  const getPopulationLabel = (population: number) => {
    if (population >= 1000000) {
      return `${(population / 1000000).toFixed(1)}M`;
    } else if (population >= 1000) {
      return `${(population / 1000).toFixed(0)}K`;
    }
    return population.toString();
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-primary animate-hologram z-10" />
        <Input
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm && setIsOpen(true)}
          placeholder={placeholder}
          className="pl-10 pr-4 bg-card/80 border-primary/30 focus:border-primary focus:ring-primary/20 transition-all duration-300 backdrop-blur-md"
        />
        {searchTerm && (
          <div className="absolute right-3 top-3 text-xs text-muted-foreground">
            {results.cities.length + results.countries.length} results
          </div>
        )}
      </div>

      {isOpen && (searchTerm.length > 0) && (results.cities.length > 0 || results.countries.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card/95 backdrop-blur-md border border-primary/20 rounded-lg shadow-2xl shadow-primary/20 z-50 max-h-96 overflow-y-auto animate-glow-pulse">
          
          {/* Countries Section */}
          {results.countries.length > 0 && (
            <div className="p-2">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-primary bg-primary/5 rounded-md mb-2">
                <Flag className="w-3 h-3" />
                Countries ({results.countries.length})
              </div>
              {results.countries.slice(0, 5).map((country, index) => (
                <button
                  key={country.id}
                  onClick={() => handleCountrySelect(country)}
                  className={`w-full text-left px-3 py-3 rounded-md transition-all duration-200 group ${
                    selectedIndex === results.cities.length + index
                      ? 'bg-primary/20 border border-primary/40'
                      : 'hover:bg-primary/10 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded border border-primary/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{country.code}</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {country.name}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <Globe className="w-3 h-3" />
                          {country.continent} • {getPopulationLabel(country.population)} people
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getCryptoIndicator(country.cryptoRegulation)}
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          country.cryptoRegulation === 'friendly' 
                            ? 'border-gold text-gold' 
                            : country.cryptoRegulation === 'restricted' 
                            ? 'border-destructive text-destructive' 
                            : 'border-muted-foreground text-muted-foreground'
                        }`}
                      >
                        {country.cryptoRegulation}
                      </Badge>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Cities Section */}
          {results.cities.length > 0 && (
            <div className="p-2">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-accent bg-accent/5 rounded-md mb-2">
                <MapPin className="w-3 h-3" />
                Cities ({results.cities.length})
              </div>
              {results.cities.slice(0, 8).map((city, index) => (
                <button
                  key={city.id}
                  onClick={() => handleCitySelect(city)}
                  className={`w-full text-left px-3 py-3 rounded-md transition-all duration-200 group ${
                    selectedIndex === index
                      ? 'bg-accent/20 border border-accent/40'
                      : 'hover:bg-accent/10 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        city.tier === 'metropolis' 
                          ? 'bg-gradient-to-r from-election to-accent animate-glow-pulse' 
                          : city.tier === 'major' 
                          ? 'bg-gradient-to-r from-gold to-gold/80' 
                          : 'bg-gradient-to-r from-territory to-secondary'
                      }`} />
                      <div>
                        <div className="font-medium text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                          {city.name}
                          {city.isCapital && (
                            <Badge variant="outline" className="text-xs border-gold text-gold">
                              Capital
                            </Badge>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <span>{city.country}</span>
                          <span>•</span>
                          <span>{getPopulationLabel(city.population)}</span>
                          <span>•</span>
                          <span className="capitalize">{city.tier}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getCryptoIndicator(undefined, city.cryptoFriendly)}
                      {city.hasElection && (
                        <TrendingUp className="w-3 h-3 text-election animate-glow-pulse" />
                      )}
                      {city.governor && (
                        <Badge variant="outline" className="text-xs border-gold text-gold">
                          Governor
                        </Badge>
                      )}
                    </div>
                  </div>
                </button>
              ))}
              {results.cities.length > 8 && (
                <div className="text-center py-2 text-xs text-muted-foreground">
                  +{results.cities.length - 8} more cities
                </div>
              )}
            </div>
          )}

          {results.cities.length === 0 && results.countries.length === 0 && searchTerm && (
            <div className="p-4 text-center text-muted-foreground">
              <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{searchTerm}"</p>
              <p className="text-xs mt-1">Try searching for a different city or country</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveSearch;