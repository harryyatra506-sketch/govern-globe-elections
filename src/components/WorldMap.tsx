import { useState } from 'react';
import { Search, Users, Crown, MapPin, Filter, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import futuristicWorldMap from '@/assets/futuristic-world-map.jpg';
import { worldCities, countries, continents, searchCities, getCitiesByContinent, getCitiesByCountry, type City } from '@/data/worldData';

interface User {
  name: string;
  tier: 'basic' | 'gold' | 'platinum';
  referrals: number;
}

const WorldMap = () => {
  const [selectedTerritory, setSelectedTerritory] = useState<City | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [cityFilter, setCityFilter] = useState<'all' | 'elections' | 'governors'>('all');
  const [user] = useState<User>({ name: 'John Doe', tier: 'platinum', referrals: 150 });
  const [zoomLevel, setZoomLevel] = useState(1);

  // Filter cities based on search and filters
  const getFilteredCities = (): City[] => {
    let cities = worldCities;

    // Apply search filter
    if (searchTerm) {
      cities = searchCities(searchTerm);
    }

    // Apply continent filter
    if (selectedContinent !== 'all') {
      cities = cities.filter(city => city.continent === selectedContinent);
    }

    // Apply country filter
    if (selectedCountry !== 'all') {
      cities = cities.filter(city => city.country === selectedCountry);
    }

    // Apply city status filter
    if (cityFilter === 'elections') {
      cities = cities.filter(city => city.hasElection);
    } else if (cityFilter === 'governors') {
      cities = cities.filter(city => city.governor);
    }

    return cities;
  };

  const filteredCities = getFilteredCities();

  const handleTerritoryClick = (city: City) => {
    setSelectedTerritory(city);
    setZoomLevel(2);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredCities.length > 0) {
      handleTerritoryClick(filteredCities[0]);
    }
  };

  const getAvailableCountries = () => {
    if (selectedContinent === 'all') {
      return countries;
    }
    return countries.filter(country => country.continent === selectedContinent);
  };

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'metropolis': return 'from-election to-accent';
      case 'major': return 'from-gold to-gold/80';
      case 'city': return 'from-territory to-secondary';
      default: return 'from-muted to-muted/80';
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Header */}
      <header className="relative z-10 border-b border-primary/20 bg-card/80 backdrop-blur-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GovernGlobe Elections
            </h1>
            <Badge 
              variant={user.tier === 'platinum' ? 'default' : 'secondary'} 
              className={`text-sm transition-all duration-300 ${
                user.tier === 'platinum' 
                  ? 'bg-gradient-to-r from-platinum to-platinum/80 animate-glow-pulse' 
                  : 'bg-gradient-to-r from-secondary to-secondary/80'
              }`}
            >
              {user.tier.toUpperCase()} MEMBER
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Referrals: <span className="font-semibold text-gold animate-hologram">{user.referrals}</span>
            </div>
            {user.tier === 'platinum' && (
              <Crown className="w-5 h-5 text-gold animate-glow-pulse" />
            )}
          </div>
        </div>
      </header>

      {/* Enhanced Search and Filter Bar */}
      <div className="relative z-10 p-6 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto space-y-4">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-primary animate-hologram" />
              <Input
                placeholder="Search cities, countries, or continents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card/80 border-primary/30 focus:border-primary focus:ring-primary/20 transition-all duration-300"
              />
            </div>
            <Button type="submit" variant="election" className="shadow-lg shadow-election/30">
              Search
            </Button>
          </form>
          
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Filters:</span>
            </div>
            
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="w-48 bg-card/80 border-primary/30">
                <SelectValue placeholder="All Continents" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Continents</SelectItem>
                {continents.map(continent => (
                  <SelectItem key={continent} value={continent}>{continent}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-48 bg-card/80 border-primary/30">
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {getAvailableCountries().map(country => (
                  <SelectItem key={country.id} value={country.name}>{country.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={cityFilter} onValueChange={(value: 'all' | 'elections' | 'governors') => setCityFilter(value)}>
              <SelectTrigger className="w-48 bg-card/80 border-primary/30">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="elections">Active Elections</SelectItem>
                <SelectItem value="governors">Has Governor</SelectItem>
              </SelectContent>
            </Select>

            <Badge variant="outline" className="text-primary border-primary/30">
              {filteredCities.length} cities found
            </Badge>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="flex-1">
          <Card className="bg-card/80 backdrop-blur-md border-primary/20 shadow-xl shadow-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <Globe className="w-5 h-5 text-primary animate-glow-pulse" />
                Global Electoral Map
                <Badge variant="outline" className="ml-auto text-xs">
                  {filteredCities.length} cities
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="relative w-full h-96 bg-cover bg-center rounded-lg border border-primary/30 overflow-hidden shadow-2xl"
                style={{ backgroundImage: `url(${futuristicWorldMap})` }}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-hologram"></div>
                
                {/* Scanning lines effect */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/60 animate-scan-line"></div>
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-accent/60 animate-scan-line" style={{ animationDelay: '2s' }}></div>
                </div>
                
                {/* Data flow lines */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-0 w-2 h-2 bg-primary rounded-full animate-data-flow"></div>
                  <div className="absolute top-3/4 left-0 w-2 h-2 bg-accent rounded-full animate-data-flow" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Territory Markers */}
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleTerritoryClick(city)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 shadow-lg transition-all duration-300 hover:scale-150 hover:shadow-xl group ${
                      city.tier === 'metropolis' ? 'w-8 h-8' : city.tier === 'major' ? 'w-6 h-6' : 'w-4 h-4'
                    } ${
                      city.hasElection 
                        ? `bg-gradient-to-r ${getTierColor(city.tier)} animate-glow-pulse shadow-election/50` 
                        : city.governor 
                        ? 'bg-gradient-to-r from-gold to-gold/80 animate-glow-pulse shadow-gold/50' 
                        : `bg-gradient-to-r ${getTierColor(city.tier)} hover:shadow-territory/50`
                    }`}
                    style={{
                      left: `${city.coordinates.x}%`,
                      top: `${city.coordinates.y}%`,
                    }}
                    title={`${city.name}, ${city.country}`}
                  >
                    {/* Inner glow effect */}
                    <div className="absolute inset-1 rounded-full bg-white/20 animate-hologram"></div>
                    
                    {/* Population indicator */}
                    {city.tier === 'metropolis' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-glow-pulse"></div>
                    )}
                  </button>
                ))}
                
                {selectedTerritory && (
                  <div 
                    className="absolute transform -translate-x-1/2 -translate-y-full bg-card/90 backdrop-blur-md border border-primary/30 rounded-lg p-3 shadow-xl shadow-primary/20 z-10 animate-glow-pulse min-w-48"
                    style={{
                      left: `${selectedTerritory.coordinates.x}%`,
                      top: `${selectedTerritory.coordinates.y}%`,
                    }}
                  >
                    <div className="text-sm font-semibold text-primary">{selectedTerritory.name}</div>
                    <div className="text-xs text-muted-foreground">{selectedTerritory.country}</div>
                    <div className="text-xs text-accent">
                      {selectedTerritory.applicants} applicants • {selectedTerritory.population.toLocaleString()} population
                    </div>
                    <Badge variant="outline" className={`mt-1 text-xs ${selectedTerritory.tier === 'metropolis' ? 'border-election text-election' : selectedTerritory.tier === 'major' ? 'border-gold text-gold' : 'border-territory text-territory'}`}>
                      {selectedTerritory.tier}
                    </Badge>
                    {/* Connecting line */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-primary animate-hologram"></div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Territory Details */}
        <div className="w-80">
          {selectedTerritory ? (
            <Card className="bg-card/80 backdrop-blur-md border-primary/20 shadow-xl shadow-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {selectedTerritory.name}
                  </span>
                  {selectedTerritory.hasElection && (
                    <Badge variant="destructive" className="animate-glow-pulse shadow-lg shadow-destructive/30">
                      ELECTION ACTIVE
                    </Badge>
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {selectedTerritory.country} • {selectedTerritory.continent}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary animate-hologram" />
                    <span>{selectedTerritory.applicants} Applicants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{selectedTerritory.population.toLocaleString()}</span>
                  </div>
                </div>

                <Badge 
                  variant="outline" 
                  className={`${
                    selectedTerritory.tier === 'metropolis' 
                      ? 'border-election text-election' 
                      : selectedTerritory.tier === 'major' 
                      ? 'border-gold text-gold' 
                      : 'border-territory text-territory'
                  }`}
                >
                  {selectedTerritory.tier.toUpperCase()} CITY
                </Badge>

                {selectedTerritory.governor && (
                  <div className="p-3 bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg border border-gold/30 animate-glow-pulse">
                    <div className="text-sm font-medium text-gold">Current Governor</div>
                    <div className="text-lg font-bold bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent">
                      {selectedTerritory.governor}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary">Application Status</div>
                  {user.tier === 'platinum' ? (
                    <Button variant="election" className="w-full shadow-lg shadow-election/30 hover:shadow-election/50 transition-all duration-300">
                      Apply for Governor
                    </Button>
                  ) : user.tier === 'gold' ? (
                    <div className="text-sm text-muted-foreground">
                      Reach 100 referrals to unlock governor applications
                      <div className="mt-2">
                        <div className="w-full bg-muted rounded-full h-2 border border-primary/20">
                          <div 
                            className="bg-gradient-to-r from-gold to-gold/80 h-2 rounded-full transition-all duration-500 animate-glow-pulse"
                            style={{ width: `${Math.min((user.referrals / 100) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-1 text-gold">{user.referrals}/100 referrals</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      Upgrade to Gold membership to track progress
                    </div>
                  )}
                </div>

                {selectedTerritory.hasElection && (
                  <div className="border-t border-primary/20 pt-4">
                    <div className="text-sm font-medium mb-2 text-primary">Active Candidates</div>
                    <div className="space-y-2">
                      {['Sarah Johnson', 'Michael Chen', 'Elena Rodriguez'].map((candidate, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gradient-to-r from-muted/50 to-transparent rounded border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <span className="text-sm">{candidate}</span>
                          <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                            View Profile
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card/80 backdrop-blur-md border-primary/20 shadow-xl shadow-primary/10">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Select a Territory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-8">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50 animate-hologram" />
                  <p>Click on a territory marker or search for a city to view election details</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;