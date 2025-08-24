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
  // North America
  {
    id: 'us',
    name: 'United States',
    code: 'US',
    continent: 'North America',
    capital: 'Washington D.C.',
    population: 331900000,
    cryptoRegulation: 'neutral',
    cities: [
      { id: 'nyc', name: 'New York', country: 'United States', countryCode: 'US', continent: 'North America', coordinates: { x: 25, y: 35 }, population: 8500000, applicants: 15, hasElection: true, tier: 'metropolis', cryptoFriendly: true },
      { id: 'la', name: 'Los Angeles', country: 'United States', countryCode: 'US', continent: 'North America', coordinates: { x: 18, y: 38 }, population: 4000000, applicants: 12, hasElection: false, tier: 'metropolis', cryptoFriendly: true },
      { id: 'chicago', name: 'Chicago', country: 'United States', countryCode: 'US', continent: 'North America', coordinates: { x: 23, y: 33 }, population: 2700000, applicants: 8, hasElection: true, tier: 'major' },
      { id: 'miami', name: 'Miami', country: 'United States', countryCode: 'US', continent: 'North America', coordinates: { x: 26, y: 42 }, population: 470000, applicants: 18, hasElection: false, tier: 'major', cryptoFriendly: true },
      { id: 'san_francisco', name: 'San Francisco', country: 'United States', countryCode: 'US', continent: 'North America', coordinates: { x: 16, y: 36 }, population: 875000, applicants: 20, hasElection: true, tier: 'major', cryptoFriendly: true },
      { id: 'washington_dc', name: 'Washington D.C.', country: 'United States', countryCode: 'US', continent: 'North America', coordinates: { x: 25, y: 37 }, population: 705000, applicants: 6, hasElection: false, tier: 'major', isCapital: true },
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    continent: 'North America',
    capital: 'Ottawa',
    population: 38000000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'toronto', name: 'Toronto', country: 'Canada', countryCode: 'CA', continent: 'North America', coordinates: { x: 24, y: 30 }, population: 2930000, applicants: 11, hasElection: true, tier: 'metropolis', cryptoFriendly: true },
      { id: 'vancouver', name: 'Vancouver', country: 'Canada', countryCode: 'CA', continent: 'North America', coordinates: { x: 16, y: 28 }, population: 675000, applicants: 7, hasElection: false, tier: 'major', cryptoFriendly: true },
      { id: 'montreal', name: 'Montreal', country: 'Canada', countryCode: 'CA', continent: 'North America', coordinates: { x: 25, y: 29 }, population: 1780000, applicants: 5, hasElection: true, tier: 'major' },
      { id: 'ottawa', name: 'Ottawa', country: 'Canada', countryCode: 'CA', continent: 'North America', coordinates: { x: 25, y: 30 }, population: 995000, applicants: 3, hasElection: false, tier: 'major', isCapital: true },
    ]
  },
  {
    id: 'mexico',
    name: 'Mexico',
    code: 'MX',
    continent: 'North America',
    capital: 'Mexico City',
    population: 129200000,
    cryptoRegulation: 'restricted',
    cities: [
      { id: 'mexico_city', name: 'Mexico City', country: 'Mexico', countryCode: 'MX', continent: 'North America', coordinates: { x: 20, y: 48 }, population: 9200000, applicants: 22, hasElection: true, governor: 'Carlos Mendez', tier: 'metropolis', isCapital: true },
      { id: 'guadalajara', name: 'Guadalajara', country: 'Mexico', countryCode: 'MX', continent: 'North America', coordinates: { x: 19, y: 49 }, population: 1560000, applicants: 8, hasElection: false, tier: 'major' },
      { id: 'monterrey', name: 'Monterrey', country: 'Mexico', countryCode: 'MX', continent: 'North America', coordinates: { x: 21, y: 46 }, population: 1142000, applicants: 6, hasElection: true, tier: 'major' },
    ]
  },

  // South America
  {
    id: 'brazil',
    name: 'Brazil',
    code: 'BR',
    continent: 'South America',
    capital: 'Brasília',
    population: 215300000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'sao_paulo', name: 'São Paulo', country: 'Brazil', countryCode: 'BR', continent: 'South America', coordinates: { x: 32, y: 65 }, population: 12300000, applicants: 28, hasElection: true, tier: 'metropolis', cryptoFriendly: true },
      { id: 'rio', name: 'Rio de Janeiro', country: 'Brazil', countryCode: 'BR', continent: 'South America', coordinates: { x: 33, y: 67 }, population: 6700000, applicants: 18, hasElection: false, tier: 'metropolis' },
      { id: 'brasilia', name: 'Brasília', country: 'Brazil', countryCode: 'BR', continent: 'South America', coordinates: { x: 31, y: 63 }, population: 3100000, applicants: 5, hasElection: true, tier: 'major', isCapital: true },
      { id: 'salvador', name: 'Salvador', country: 'Brazil', countryCode: 'BR', continent: 'South America', coordinates: { x: 34, y: 65 }, population: 2900000, applicants: 7, hasElection: false, tier: 'major' },
    ]
  },
  {
    id: 'argentina',
    name: 'Argentina',
    code: 'AR',
    continent: 'South America',
    capital: 'Buenos Aires',
    population: 45400000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'buenos_aires', name: 'Buenos Aires', country: 'Argentina', countryCode: 'AR', continent: 'South America', coordinates: { x: 30, y: 75 }, population: 3100000, applicants: 14, hasElection: true, tier: 'metropolis', isCapital: true, cryptoFriendly: true },
      { id: 'cordoba', name: 'Córdoba', country: 'Argentina', countryCode: 'AR', continent: 'South America', coordinates: { x: 29, y: 73 }, population: 1450000, applicants: 4, hasElection: false, tier: 'major' },
      { id: 'rosario', name: 'Rosario', country: 'Argentina', countryCode: 'AR', continent: 'South America', coordinates: { x: 29, y: 74 }, population: 950000, applicants: 3, hasElection: true, tier: 'city' },
    ]
  },
  {
    id: 'colombia',
    name: 'Colombia',
    code: 'CO',
    continent: 'South America',
    capital: 'Bogotá',
    population: 51000000,
    cryptoRegulation: 'neutral',
    cities: [
      { id: 'bogota', name: 'Bogotá', country: 'Colombia', countryCode: 'CO', continent: 'South America', coordinates: { x: 27, y: 58 }, population: 7400000, applicants: 12, hasElection: true, tier: 'major', isCapital: true },
      { id: 'medellin', name: 'Medellín', country: 'Colombia', countryCode: 'CO', continent: 'South America', coordinates: { x: 26, y: 59 }, population: 2530000, applicants: 8, hasElection: false, tier: 'major' },
      { id: 'cali', name: 'Cali', country: 'Colombia', countryCode: 'CO', continent: 'South America', coordinates: { x: 26, y: 60 }, population: 2230000, applicants: 5, hasElection: true, tier: 'major' },
    ]
  },

  // Europe
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    continent: 'Europe',
    capital: 'London',
    population: 67000000,
    cryptoRegulation: 'neutral',
    cities: [
      { id: 'london', name: 'London', country: 'United Kingdom', countryCode: 'GB', continent: 'Europe', coordinates: { x: 50, y: 30 }, population: 9000000, applicants: 25, hasElection: true, tier: 'metropolis', isCapital: true, cryptoFriendly: true },
      { id: 'manchester', name: 'Manchester', country: 'United Kingdom', countryCode: 'GB', continent: 'Europe', coordinates: { x: 50, y: 29 }, population: 550000, applicants: 6, hasElection: false, tier: 'major' },
      { id: 'birmingham', name: 'Birmingham', country: 'United Kingdom', countryCode: 'GB', continent: 'Europe', coordinates: { x: 50, y: 30 }, population: 1140000, applicants: 4, hasElection: true, tier: 'major' },
      { id: 'edinburgh', name: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB', continent: 'Europe', coordinates: { x: 50, y: 28 }, population: 540000, applicants: 3, hasElection: false, tier: 'city' },
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    continent: 'Europe',
    capital: 'Berlin',
    population: 83200000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'berlin', name: 'Berlin', country: 'Germany', countryCode: 'DE', continent: 'Europe', coordinates: { x: 53, y: 28 }, population: 3700000, applicants: 16, hasElection: true, tier: 'metropolis', isCapital: true, cryptoFriendly: true },
      { id: 'munich', name: 'Munich', country: 'Germany', countryCode: 'DE', continent: 'Europe', coordinates: { x: 53, y: 31 }, population: 1500000, applicants: 8, hasElection: false, tier: 'major' },
      { id: 'hamburg', name: 'Hamburg', country: 'Germany', countryCode: 'DE', continent: 'Europe', coordinates: { x: 52, y: 27 }, population: 1900000, applicants: 6, hasElection: true, tier: 'major' },
      { id: 'frankfurt', name: 'Frankfurt', country: 'Germany', countryCode: 'DE', continent: 'Europe', coordinates: { x: 52, y: 30 }, population: 760000, applicants: 12, hasElection: false, tier: 'major', cryptoFriendly: true },
    ]
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    continent: 'Europe',
    capital: 'Paris',
    population: 67800000,
    cryptoRegulation: 'neutral',
    cities: [
      { id: 'paris', name: 'Paris', country: 'France', countryCode: 'FR', continent: 'Europe', coordinates: { x: 51, y: 32 }, population: 2200000, applicants: 18, hasElection: false, tier: 'metropolis', isCapital: true },
      { id: 'marseille', name: 'Marseille', country: 'France', countryCode: 'FR', continent: 'Europe', coordinates: { x: 52, y: 35 }, population: 870000, applicants: 5, hasElection: true, tier: 'major' },
      { id: 'lyon', name: 'Lyon', country: 'France', countryCode: 'FR', continent: 'Europe', coordinates: { x: 52, y: 33 }, population: 520000, applicants: 4, hasElection: false, tier: 'city' },
    ]
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    continent: 'Europe',
    capital: 'Bern',
    population: 8700000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'zurich', name: 'Zurich', country: 'Switzerland', countryCode: 'CH', continent: 'Europe', coordinates: { x: 52, y: 31 }, population: 435000, applicants: 15, hasElection: true, tier: 'city', cryptoFriendly: true },
      { id: 'geneva', name: 'Geneva', country: 'Switzerland', countryCode: 'CH', continent: 'Europe', coordinates: { x: 52, y: 32 }, population: 200000, applicants: 8, hasElection: false, tier: 'city', cryptoFriendly: true },
      { id: 'bern', name: 'Bern', country: 'Switzerland', countryCode: 'CH', continent: 'Europe', coordinates: { x: 52, y: 31 }, population: 140000, applicants: 2, hasElection: true, tier: 'city', isCapital: true },
    ]
  },

  // Asia
  {
    id: 'china',
    name: 'China',
    code: 'CN',
    continent: 'Asia',
    capital: 'Beijing',
    population: 1412000000,
    cryptoRegulation: 'restricted',
    cities: [
      { id: 'beijing', name: 'Beijing', country: 'China', countryCode: 'CN', continent: 'Asia', coordinates: { x: 77, y: 36 }, population: 21500000, applicants: 35, hasElection: false, tier: 'metropolis', isCapital: true },
      { id: 'shanghai', name: 'Shanghai', country: 'China', countryCode: 'CN', continent: 'Asia', coordinates: { x: 78, y: 39 }, population: 24300000, applicants: 42, hasElection: true, tier: 'metropolis' },
      { id: 'guangzhou', name: 'Guangzhou', country: 'China', countryCode: 'CN', continent: 'Asia', coordinates: { x: 77, y: 44 }, population: 15300000, applicants: 18, hasElection: false, tier: 'metropolis' },
      { id: 'shenzhen', name: 'Shenzhen', country: 'China', countryCode: 'CN', continent: 'Asia', coordinates: { x: 77, y: 45 }, population: 12600000, applicants: 22, hasElection: true, tier: 'metropolis' },
      { id: 'hong_kong', name: 'Hong Kong', country: 'China', countryCode: 'HK', continent: 'Asia', coordinates: { x: 77, y: 45 }, population: 7500000, applicants: 16, hasElection: false, tier: 'major', cryptoFriendly: true },
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    code: 'JP',
    continent: 'Asia',
    capital: 'Tokyo',
    population: 125800000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'tokyo', name: 'Tokyo', country: 'Japan', countryCode: 'JP', continent: 'Asia', coordinates: { x: 81, y: 40 }, population: 14000000, applicants: 30, hasElection: true, governor: 'Akira Tanaka', tier: 'metropolis', isCapital: true, cryptoFriendly: true },
      { id: 'osaka', name: 'Osaka', country: 'Japan', countryCode: 'JP', continent: 'Asia', coordinates: { x: 80, y: 41 }, population: 2690000, applicants: 12, hasElection: false, tier: 'major' },
      { id: 'kyoto', name: 'Kyoto', country: 'Japan', countryCode: 'JP', continent: 'Asia', coordinates: { x: 80, y: 40 }, population: 1460000, applicants: 6, hasElection: true, tier: 'major' },
      { id: 'yokohama', name: 'Yokohama', country: 'Japan', countryCode: 'JP', continent: 'Asia', coordinates: { x: 81, y: 40 }, population: 3780000, applicants: 8, hasElection: false, tier: 'major' },
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    code: 'SG',
    continent: 'Asia',
    capital: 'Singapore',
    population: 5900000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'singapore', name: 'Singapore', country: 'Singapore', countryCode: 'SG', continent: 'Asia', coordinates: { x: 75, y: 55 }, population: 5900000, applicants: 25, hasElection: true, tier: 'major', isCapital: true, cryptoFriendly: true },
    ]
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    code: 'AE',
    continent: 'Asia',
    capital: 'Abu Dhabi',
    population: 9900000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'dubai', name: 'Dubai', country: 'UAE', countryCode: 'AE', continent: 'Asia', coordinates: { x: 62, y: 43 }, population: 3400000, applicants: 28, hasElection: true, tier: 'major', cryptoFriendly: true },
      { id: 'abu_dhabi', name: 'Abu Dhabi', country: 'UAE', countryCode: 'AE', continent: 'Asia', coordinates: { x: 61, y: 43 }, population: 1500000, applicants: 12, hasElection: false, tier: 'major', isCapital: true, cryptoFriendly: true },
    ]
  },

  // Africa
  {
    id: 'nigeria',
    name: 'Nigeria',
    code: 'NG',
    continent: 'Africa',
    capital: 'Abuja',
    population: 218500000,
    cryptoRegulation: 'restricted',
    cities: [
      { id: 'lagos', name: 'Lagos', country: 'Nigeria', countryCode: 'NG', continent: 'Africa', coordinates: { x: 52, y: 60 }, population: 15400000, applicants: 22, hasElection: false, tier: 'metropolis' },
      { id: 'abuja', name: 'Abuja', country: 'Nigeria', countryCode: 'NG', continent: 'Africa', coordinates: { x: 53, y: 58 }, population: 3800000, applicants: 8, hasElection: true, tier: 'major', isCapital: true },
      { id: 'kano', name: 'Kano', country: 'Nigeria', countryCode: 'NG', continent: 'Africa', coordinates: { x: 53, y: 55 }, population: 4100000, applicants: 5, hasElection: false, tier: 'major' },
    ]
  },
  {
    id: 'south_africa',
    name: 'South Africa',
    code: 'ZA',
    continent: 'Africa',
    capital: 'Cape Town',
    population: 60400000,
    cryptoRegulation: 'neutral',
    cities: [
      { id: 'johannesburg', name: 'Johannesburg', country: 'South Africa', countryCode: 'ZA', continent: 'Africa', coordinates: { x: 57, y: 77 }, population: 5600000, applicants: 16, hasElection: false, tier: 'major' },
      { id: 'cape_town', name: 'Cape Town', country: 'South Africa', countryCode: 'ZA', continent: 'Africa', coordinates: { x: 55, y: 79 }, population: 4600000, applicants: 12, hasElection: true, tier: 'major', isCapital: true },
      { id: 'durban', name: 'Durban', country: 'South Africa', countryCode: 'ZA', continent: 'Africa', coordinates: { x: 58, y: 78 }, population: 3900000, applicants: 6, hasElection: false, tier: 'major' },
    ]
  },

  // Oceania
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    continent: 'Oceania',
    capital: 'Canberra',
    population: 25700000,
    cryptoRegulation: 'friendly',
    cities: [
      { id: 'sydney', name: 'Sydney', country: 'Australia', countryCode: 'AU', continent: 'Oceania', coordinates: { x: 85, y: 75 }, population: 5300000, applicants: 18, hasElection: true, tier: 'metropolis', cryptoFriendly: true },
      { id: 'melbourne', name: 'Melbourne', country: 'Australia', countryCode: 'AU', continent: 'Oceania', coordinates: { x: 83, y: 77 }, population: 5200000, applicants: 14, hasElection: false, tier: 'metropolis' },
      { id: 'brisbane', name: 'Brisbane', country: 'Australia', countryCode: 'AU', continent: 'Oceania', coordinates: { x: 86, y: 73 }, population: 2600000, applicants: 8, hasElection: true, tier: 'major' },
      { id: 'perth', name: 'Perth', country: 'Australia', countryCode: 'AU', continent: 'Oceania', coordinates: { x: 78, y: 76 }, population: 2100000, applicants: 5, hasElection: false, tier: 'major' },
      { id: 'canberra', name: 'Canberra', country: 'Australia', countryCode: 'AU', continent: 'Oceania', coordinates: { x: 84, y: 76 }, population: 430000, applicants: 2, hasElection: true, tier: 'city', isCapital: true },
    ]
  },
];

// Helper functions
export const getAllCities = (): CityData[] => {
  return completeWorldDatabase.flatMap(country => country.cities);
};

export const getAllCountries = (): CountryData[] => {
  return completeWorldDatabase;
};

export const getCryptoFriendlyCities = (): CityData[] => {
  return getAllCities().filter(city => city.cryptoFriendly);
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

export const getCitiesByContinent = (continent: string): CityData[] => {
  return getAllCities().filter(city => city.continent === continent);
};

export const getCitiesByCountry = (countryName: string): CityData[] => {
  return getAllCities().filter(city => city.country === countryName);
};

export const getCountriesByContinent = (continent: string): CountryData[] => {
  return completeWorldDatabase.filter(country => country.continent === continent);
};