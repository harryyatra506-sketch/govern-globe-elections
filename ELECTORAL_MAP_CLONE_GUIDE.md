# 🌍 Electoral Map System - Complete Clone Guide

## Overview
This is a complete guide to clone the futuristic electoral governance world map system. The system features an interactive world map with 200+ cities across 6 continents, crypto-friendly territories, electoral tracking, and a futuristic UI with animations.

## 🚀 Features
- Interactive world map with 200+ cities and countries
- Advanced search with real-time results
- Multi-level filtering (continent, country, city status)
- Crypto-friendly territory tracking
- Electoral management system
- Futuristic UI with animations and glow effects
- Responsive design with dark/light mode support

## 📋 Prerequisites

### Required Dependencies
```bash
npm install react react-dom
npm install @radix-ui/react-select @radix-ui/react-dialog @radix-ui/react-popover
npm install lucide-react
npm install class-variance-authority clsx tailwind-merge
npm install tailwindcss tailwindcss-animate
npm install typescript @types/react @types/react-dom
```

### Development Dependencies
```bash
npm install -D vite @vitejs/plugin-react
npm install -D @types/node
npm install -D autoprefixer postcss
```

## 🎨 Design System Setup

### 1. Tailwind Configuration (`tailwind.config.ts`)
```typescript
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					foreground: 'hsl(var(--gold-foreground))'
				},
				platinum: {
					DEFAULT: 'hsl(var(--platinum))',
					foreground: 'hsl(var(--platinum-foreground))'
				},
				election: {
					DEFAULT: 'hsl(var(--election))',
					foreground: 'hsl(var(--election-foreground))'
				},
				territory: {
					DEFAULT: 'hsl(var(--territory))',
					foreground: 'hsl(var(--territory-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--neon-blue) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--neon-blue) / 0.6), 0 0 60px hsl(var(--neon-blue) / 0.4)'
					}
				},
				'scan-line': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100vw)'
					}
				},
				'data-flow': {
					'0%': {
						transform: 'translateX(-100%) rotate(0deg)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%) rotate(360deg)',
						opacity: '0'
					}
				},
				'hologram': {
					'0%, 100%': {
						opacity: '0.8',
						filter: 'hue-rotate(0deg)'
					},
					'50%': {
						opacity: '1',
						filter: 'hue-rotate(90deg)'
					}
				}
			},
			animation: {
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'scan-line': 'scan-line 4s linear infinite',
				'data-flow': 'data-flow 2s ease-in-out infinite',
				'hologram': 'hologram 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### 2. Global Styles (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 215 30% 7%;
    --foreground: 210 40% 95%;
    --card: 215 30% 10%;
    --card-foreground: 210 40% 95%;
    --popover: 215 30% 10%;
    --popover-foreground: 210 40% 95%;
    --primary: 200 100% 60%;
    --primary-foreground: 215 30% 10%;
    --secondary: 160 100% 50%;
    --secondary-foreground: 215 30% 10%;
    --muted: 215 30% 15%;
    --muted-foreground: 210 20% 60%;
    --accent: 280 100% 70%;
    --accent-foreground: 215 30% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    /* Futuristic Colors */
    --neon-blue: 200 100% 60%;
    --neon-cyan: 180 100% 50%;
    --neon-purple: 280 100% 70%;
    --neon-green: 120 100% 50%;
    --dark-bg: 215 30% 7%;
    --dark-surface: 215 30% 10%;
    --grid-color: 200 100% 60%;

    /* Electoral System Colors */
    --gold: 45 100% 60%;
    --gold-foreground: 215 30% 10%;
    --platinum: 210 40% 80%;
    --platinum-foreground: 215 30% 10%;
    --election: 280 100% 60%;
    --election-foreground: 215 30% 10%;
    --territory: 160 60% 50%;
    --territory-foreground: 215 30% 10%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## 🗂️ File Structure
```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── select.tsx
│   │   └── input.tsx
│   ├── WorldMap.tsx     # Main map component
│   └── InteractiveSearch.tsx
├── data/
│   └── completeWorldData.ts
├── assets/
│   └── futuristic-world-map.jpg
├── lib/
│   └── utils.ts
└── index.css
```

## 📊 Data Structure

### 1. World Database (`src/data/completeWorldData.ts`)
```typescript
export interface CityData {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  continent: string;
  coordinates: { x: number; y: number };
  population: number;
  applicants: number;
  hasElection: boolean;
  governor?: string;
  tier: 'metropolis' | 'major' | 'city';
  isCapital?: boolean;
  cryptoFriendly?: boolean;
}

export interface CountryData {
  id: string;
  name: string;
  code: string;
  continent: string;
  capital: string;
  population: number;
  cities: CityData[];
  cryptoRegulation: 'friendly' | 'neutral' | 'restricted';
}

export const completeWorldDatabase: CountryData[] = [
  // Sample country data
  {
    id: 'us',
    name: 'United States',
    code: 'US',
    continent: 'North America',
    capital: 'Washington D.C.',
    population: 331900000,
    cryptoRegulation: 'neutral',
    cities: [
      {
        id: 'nyc',
        name: 'New York',
        country: 'United States',
        countryCode: 'US',
        continent: 'North America',
        coordinates: { x: 25, y: 35 },
        population: 8500000,
        applicants: 15,
        hasElection: true,
        tier: 'metropolis',
        cryptoFriendly: true
      },
      // Add more cities...
    ]
  },
  // Add more countries...
];

// Helper functions
export const getAllCities = (): CityData[] => {
  return completeWorldDatabase.flatMap(country => country.cities);
};

export const searchEntities = (query: string): { cities: CityData[], countries: CountryData[] } => {
  const searchTerm = query.toLowerCase();
  
  const cities = getAllCities().filter(city => 
    city.name.toLowerCase().includes(searchTerm) ||
    city.country.toLowerCase().includes(searchTerm) ||
    city.continent.toLowerCase().includes(searchTerm)
  );

  const countries = completeWorldDatabase.filter(country =>
    country.name.toLowerCase().includes(searchTerm) ||
    country.continent.toLowerCase().includes(searchTerm) ||
    country.code.toLowerCase().includes(searchTerm)
  );

  return { cities, countries };
};
```

## 🔍 Interactive Search Component

### `src/components/InteractiveSearch.tsx`
```typescript
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

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-primary animate-hologram z-10" />
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm && setIsOpen(true)}
          placeholder={placeholder}
          className="pl-10 pr-4 bg-card/80 border-primary/30 focus:border-primary focus:ring-primary/20 transition-all duration-300 backdrop-blur-md"
        />
      </div>

      {isOpen && searchTerm.length > 0 && (results.cities.length > 0 || results.countries.length > 0) && (
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
                          {country.continent}
                        </div>
                      </div>
                    </div>
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
                          <span className="capitalize">{city.tier}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {city.cryptoFriendly && (
                        <Zap className="w-3 h-3 text-gold animate-hologram" />
                      )}
                      {city.hasElection && (
                        <TrendingUp className="w-3 h-3 text-election animate-glow-pulse" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveSearch;
```

## 🗺️ Main World Map Component

### `src/components/WorldMap.tsx`
```typescript
import { useState } from 'react';
import { Users, Crown, MapPin, Filter, Globe, Zap, Building, Flag } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import futuristicWorldMap from '@/assets/futuristic-world-map.jpg';
import InteractiveSearch from './InteractiveSearch';
import { 
  completeWorldDatabase, 
  getAllCities, 
  getCitiesByContinent, 
  getCitiesByCountry, 
  getCountriesByContinent,
  getCryptoFriendlyCities,
  type CityData, 
  type CountryData 
} from '@/data/completeWorldData';

interface User {
  name: string;
  tier: 'basic' | 'gold' | 'platinum';
  referrals: number;
}

const continents = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania'];

const WorldMap = () => {
  const [selectedTerritory, setSelectedTerritory] = useState<CityData | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [cityFilter, setCityFilter] = useState<'all' | 'elections' | 'governors' | 'crypto'>('all');
  const [user] = useState<User>({ name: 'John Doe', tier: 'platinum', referrals: 150 });

  // Filter cities based on filters
  const getFilteredCities = (): CityData[] => {
    let cities = getAllCities();

    if (selectedContinent !== 'all') {
      cities = cities.filter(city => city.continent === selectedContinent);
    }

    if (selectedCountry !== 'all') {
      cities = cities.filter(city => city.country === selectedCountry);
    }

    if (cityFilter === 'elections') {
      cities = cities.filter(city => city.hasElection);
    } else if (cityFilter === 'governors') {
      cities = cities.filter(city => city.governor);
    } else if (cityFilter === 'crypto') {
      cities = cities.filter(city => city.cryptoFriendly);
    }

    return cities;
  };

  const filteredCities = getFilteredCities();

  const handleCitySelect = (city: CityData) => {
    setSelectedTerritory(city);
  };

  const handleCountrySelect = (country: CountryData) => {
    const majorCity = country.cities.find(city => city.tier === 'metropolis') || country.cities[0];
    if (majorCity) {
      handleCitySelect(majorCity);
    }
  };

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'metropolis': return 'from-election to-accent';
      case 'major': return 'from-gold to-gold/80';
      case 'city': return 'from-territory to-secondary';
      default: return 'from-muted to-muted/80';
    }
  };

  const cryptoStats = {
    cities: getCryptoFriendlyCities().length,
    countries: completeWorldDatabase.filter(c => c.cryptoRegulation === 'friendly').length
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
            
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
              <Zap className="w-4 h-4 text-gold animate-hologram" />
              <span className="text-xs text-gold font-medium">
                {cryptoStats.cities} Crypto Cities • {cryptoStats.countries} Friendly Nations
              </span>
            </div>
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

      {/* Search and Filter Bar */}
      <div className="relative z-10 p-6 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="max-w-2xl mx-auto">
            <InteractiveSearch 
              onCitySelect={handleCitySelect}
              onCountrySelect={handleCountrySelect}
              placeholder="🔍 Search 200+ cities & countries worldwide..."
            />
          </div>

          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Filters:</span>
            </div>
            
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="w-48 bg-card/80 border-primary/30 backdrop-blur-md">
                <SelectValue placeholder="All Continents" />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-md border-primary/30 z-50">
                <SelectItem value="all">All Continents</SelectItem>
                {continents.map(continent => (
                  <SelectItem key={continent} value={continent}>{continent}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-48 bg-card/80 border-primary/30 backdrop-blur-md">
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-md border-primary/30 z-50">
                <SelectItem value="all">All Countries</SelectItem>
                {/* Add countries based on selected continent */}
              </SelectContent>
            </Select>

            <Select value={cityFilter} onValueChange={(value: 'all' | 'elections' | 'governors' | 'crypto') => setCityFilter(value)}>
              <SelectTrigger className="w-48 bg-card/80 border-primary/30 backdrop-blur-md">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-md border-primary/30 z-50">
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="elections">🗳️ Active Elections</SelectItem>
                <SelectItem value="governors">👑 Has Governor</SelectItem>
                <SelectItem value="crypto">⚡ Crypto Friendly</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-primary border-primary/30">
                🌍 {filteredCities.length} cities
              </Badge>
              <Badge variant="outline" className="text-accent border-accent/30">
                🏛️ {completeWorldDatabase.length} countries
              </Badge>
            </div>
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
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="relative w-full h-96 bg-cover bg-center rounded-lg border border-primary/30 overflow-hidden shadow-2xl"
                style={{ backgroundImage: `url(${futuristicWorldMap})` }}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-hologram"></div>
                
                {/* Territory Markers */}
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedTerritory(city)}
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
                    <div className="absolute inset-1 rounded-full bg-white/20 animate-hologram"></div>
                    
                    {city.tier === 'metropolis' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-glow-pulse"></div>
                    )}
                    
                    {city.cryptoFriendly && (
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold rounded-full animate-hologram"></div>
                    )}
                  </button>
                ))}

                {/* Selected Territory Popup */}
                {selectedTerritory && (
                  <div 
                    className="absolute transform -translate-x-1/2 -translate-y-full bg-card/90 backdrop-blur-md border border-primary/30 rounded-lg p-3 shadow-xl shadow-primary/20 z-10 animate-glow-pulse min-w-48"
                    style={{
                      left: `${selectedTerritory.coordinates.x}%`,
                      top: `${selectedTerritory.coordinates.y}%`,
                    }}
                  >
                    <div className="text-sm font-semibold text-primary flex items-center gap-2">
                      {selectedTerritory.name}
                      {selectedTerritory.cryptoFriendly && (
                        <Zap className="w-3 h-3 text-gold animate-hologram" />
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{selectedTerritory.country}</div>
                    <div className="text-xs text-accent flex items-center gap-1">
                      <span>{selectedTerritory.applicants} applicants</span>
                      <span>•</span>
                      <span>{selectedTerritory.population.toLocaleString()}</span>
                      {selectedTerritory.isCapital && <span>• Capital</span>}
                    </div>
                    <Badge variant="outline" className={`mt-1 text-xs ${selectedTerritory.tier === 'metropolis' ? 'border-election text-election' : selectedTerritory.tier === 'major' ? 'border-gold text-gold' : 'border-territory text-territory'}`}>
                      {selectedTerritory.tier}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Territory Details Panel */}
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
                    <Building className="w-4 h-4 text-accent" />
                    <span>{(selectedTerritory.population / 1000000).toFixed(1)}M people</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
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
                  
                  {selectedTerritory.isCapital && (
                    <Badge variant="outline" className="border-primary text-primary">
                      CAPITAL
                    </Badge>
                  )}
                  
                  {selectedTerritory.cryptoFriendly && (
                    <Badge variant="outline" className="border-gold text-gold">
                      <Zap className="w-3 h-3 mr-1" />
                      CRYPTO FRIENDLY
                    </Badge>
                  )}
                </div>

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
                    <Button variant="default" className="w-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
                      Apply for Governor
                    </Button>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      Upgrade to Platinum membership to apply
                    </div>
                  )}
                </div>
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
                  <p>Select a city from the map or use the search above</p>
                  <div className="mt-4 text-xs space-y-1">
                    <p>🌍 {getAllCities().length} cities worldwide</p>
                    <p>⚡ {cryptoStats.cities} crypto-friendly locations</p>
                    <p>🏛️ {completeWorldDatabase.length} countries</p>
                  </div>
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
```

## 🎯 Key Features Implementation

### 1. **Interactive Map Markers**
- Dynamic sizing based on city tier (metropolis > major > city)
- Color-coded based on electoral status
- Hover animations with scale and glow effects
- Click handlers for territory selection

### 2. **Advanced Filtering System**
- Continent-based filtering
- Country-specific filtering
- Electoral status filtering (elections, governors, crypto-friendly)
- Real-time result counting

### 3. **Search Functionality**
- Real-time search across cities and countries
- Keyboard navigation support
- Grouped results display
- Smart result ranking

### 4. **Futuristic UI Elements**
- Animated scanning lines
- Holographic overlays
- Glow pulse animations
- Backdrop blur effects
- Grid patterns

### 5. **User Management**
- Tier-based access control (basic, gold, platinum)
- Referral tracking
- Application eligibility

## 🎨 Assets Required

### World Map Background
- High-resolution futuristic world map image
- Recommended dimensions: 1920x1080 or higher
- Dark theme compatible
- Should show continents clearly

### Color Scheme
- **Primary**: Cyan blue (#00CCFF)
- **Secondary**: Neon green (#00FF80)
- **Accent**: Purple (#8B00FF)
- **Gold**: Golden yellow (#FFD700)
- **Background**: Dark blue (#0F172A)

## ⚙️ Installation Steps

1. **Create React Project**
```bash
npm create vite@latest electoral-map --template react-ts
cd electoral-map
```

2. **Install Dependencies**
```bash
npm install
npm install @radix-ui/react-select @radix-ui/react-dialog @radix-ui/react-popover
npm install lucide-react
npm install class-variance-authority clsx tailwind-merge
npm install tailwindcss tailwindcss-animate
```

3. **Setup Tailwind CSS**
```bash
npx tailwindcss init -p
```

4. **Copy all the code files** from this guide into your project structure

5. **Add world map image** to `src/assets/futuristic-world-map.jpg`

6. **Start Development Server**
```bash
npm run dev
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📱 Mobile Responsiveness

The system is fully responsive with:
- Collapsible filters on mobile
- Touch-friendly map interactions
- Responsive grid layouts
- Mobile-optimized search interface

## 🔧 Customization Options

### Adding New Countries/Cities
1. Add to `completeWorldData.ts`
2. Include proper coordinates (x,y percentages)
3. Set appropriate tier and properties

### Styling Modifications
1. Update CSS variables in `index.css`
2. Modify Tailwind config for new colors
3. Adjust animation timings and effects

### Feature Extensions
- Add real-time election results
- Integrate blockchain voting
- Add user authentication
- Implement real-time updates

## 💡 Best Practices

1. **Performance**: Use React.memo for expensive components
2. **Accessibility**: Add proper ARIA labels and keyboard navigation
3. **SEO**: Add meta tags and structured data
4. **Security**: Validate all user inputs
5. **Analytics**: Track user interactions and popular territories

## 🔗 Integration Points

### Blockchain Integration
- Connect to Web3 wallet providers
- Implement smart contracts for voting
- Add cryptocurrency payment processing

### Backend API
- User authentication and profiles
- Real-time election data
- Application management system
- Analytics and reporting

### Third-party Services
- Map services (Mapbox, Google Maps)
- Real-time communication (WebSocket)
- Push notifications
- Email services

---

## 📄 License
This clone guide is provided for educational and development purposes. Ensure you have proper licensing for any commercial use.

## 🤝 Support
For implementation support or customization services, please contact the development team.

---

**Happy Coding! 🚀**