export interface City {
  id: string;
  name: string;
  country: string;
  continent: string;
  coordinates: { x: number; y: number };
  population: number;
  applicants: number;
  hasElection: boolean;
  governor?: string;
  tier: 'metropolis' | 'major' | 'city';
}

export interface Country {
  id: string;
  name: string;
  continent: string;
  cities: City[];
}

export const worldCities: City[] = [
  // North America
  { id: 'nyc', name: 'New York', country: 'United States', continent: 'North America', coordinates: { x: 25, y: 35 }, population: 8500000, applicants: 12, hasElection: true, tier: 'metropolis' },
  { id: 'la', name: 'Los Angeles', country: 'United States', continent: 'North America', coordinates: { x: 18, y: 38 }, population: 4000000, applicants: 8, hasElection: false, tier: 'metropolis' },
  { id: 'chicago', name: 'Chicago', country: 'United States', continent: 'North America', coordinates: { x: 23, y: 33 }, population: 2700000, applicants: 6, hasElection: true, tier: 'major' },
  { id: 'miami', name: 'Miami', country: 'United States', continent: 'North America', coordinates: { x: 26, y: 42 }, population: 470000, applicants: 4, hasElection: false, tier: 'major' },
  { id: 'toronto', name: 'Toronto', country: 'Canada', continent: 'North America', coordinates: { x: 24, y: 30 }, population: 2930000, applicants: 7, hasElection: true, tier: 'metropolis' },
  { id: 'vancouver', name: 'Vancouver', country: 'Canada', continent: 'North America', coordinates: { x: 16, y: 28 }, population: 675000, applicants: 3, hasElection: false, tier: 'major' },
  { id: 'mexico_city', name: 'Mexico City', country: 'Mexico', continent: 'North America', coordinates: { x: 20, y: 48 }, population: 9200000, applicants: 15, hasElection: true, governor: 'Carlos Mendez', tier: 'metropolis' },

  // South America
  { id: 'sao_paulo', name: 'São Paulo', country: 'Brazil', continent: 'South America', coordinates: { x: 32, y: 65 }, population: 12300000, applicants: 18, hasElection: true, tier: 'metropolis' },
  { id: 'rio', name: 'Rio de Janeiro', country: 'Brazil', continent: 'South America', coordinates: { x: 33, y: 67 }, population: 6700000, applicants: 11, hasElection: false, tier: 'metropolis' },
  { id: 'buenos_aires', name: 'Buenos Aires', country: 'Argentina', continent: 'South America', coordinates: { x: 30, y: 75 }, population: 3100000, applicants: 9, hasElection: true, tier: 'metropolis' },
  { id: 'lima', name: 'Lima', country: 'Peru', continent: 'South America', coordinates: { x: 25, y: 70 }, population: 10700000, applicants: 6, hasElection: false, tier: 'major' },
  { id: 'bogota', name: 'Bogotá', country: 'Colombia', continent: 'South America', coordinates: { x: 27, y: 58 }, population: 7400000, applicants: 5, hasElection: true, tier: 'major' },
  { id: 'santiago', name: 'Santiago', country: 'Chile', continent: 'South America', coordinates: { x: 28, y: 76 }, population: 6200000, applicants: 4, hasElection: false, tier: 'major' },

  // Europe
  { id: 'london', name: 'London', country: 'United Kingdom', continent: 'Europe', coordinates: { x: 50, y: 30 }, population: 9000000, applicants: 14, hasElection: true, tier: 'metropolis' },
  { id: 'paris', name: 'Paris', country: 'France', continent: 'Europe', coordinates: { x: 51, y: 32 }, population: 2200000, applicants: 10, hasElection: false, tier: 'metropolis' },
  { id: 'berlin', name: 'Berlin', country: 'Germany', continent: 'Europe', coordinates: { x: 53, y: 28 }, population: 3700000, applicants: 8, hasElection: true, tier: 'metropolis' },
  { id: 'madrid', name: 'Madrid', country: 'Spain', continent: 'Europe', coordinates: { x: 49, y: 36 }, population: 3200000, applicants: 7, hasElection: false, tier: 'major' },
  { id: 'rome', name: 'Rome', country: 'Italy', continent: 'Europe', coordinates: { x: 53, y: 35 }, population: 2800000, applicants: 6, hasElection: true, tier: 'major' },
  { id: 'amsterdam', name: 'Amsterdam', country: 'Netherlands', continent: 'Europe', coordinates: { x: 52, y: 29 }, population: 870000, applicants: 4, hasElection: false, tier: 'major' },
  { id: 'stockholm', name: 'Stockholm', country: 'Sweden', continent: 'Europe', coordinates: { x: 55, y: 24 }, population: 980000, applicants: 3, hasElection: true, tier: 'city' },
  { id: 'moscow', name: 'Moscow', country: 'Russia', continent: 'Europe', coordinates: { x: 61, y: 25 }, population: 12500000, applicants: 16, hasElection: true, governor: 'Dmitri Volkov', tier: 'metropolis' },
  { id: 'istanbul', name: 'Istanbul', country: 'Turkey', continent: 'Europe', coordinates: { x: 58, y: 36 }, population: 15500000, applicants: 13, hasElection: false, tier: 'metropolis' },

  // Asia
  { id: 'tokyo', name: 'Tokyo', country: 'Japan', continent: 'Asia', coordinates: { x: 81, y: 40 }, population: 14000000, applicants: 20, hasElection: true, governor: 'Akira Tanaka', tier: 'metropolis' },
  { id: 'beijing', name: 'Beijing', country: 'China', continent: 'Asia', coordinates: { x: 77, y: 36 }, population: 21500000, applicants: 25, hasElection: false, tier: 'metropolis' },
  { id: 'shanghai', name: 'Shanghai', country: 'China', continent: 'Asia', coordinates: { x: 78, y: 39 }, population: 24300000, applicants: 22, hasElection: true, tier: 'metropolis' },
  { id: 'mumbai', name: 'Mumbai', country: 'India', continent: 'Asia', coordinates: { x: 69, y: 48 }, population: 20400000, applicants: 18, hasElection: true, tier: 'metropolis' },
  { id: 'delhi', name: 'Delhi', country: 'India', continent: 'Asia', coordinates: { x: 70, y: 44 }, population: 32900000, applicants: 30, hasElection: false, tier: 'metropolis' },
  { id: 'bangalore', name: 'Bangalore', country: 'India', continent: 'Asia', coordinates: { x: 70, y: 52 }, population: 13200000, applicants: 12, hasElection: true, tier: 'metropolis' },
  { id: 'seoul', name: 'Seoul', country: 'South Korea', continent: 'Asia', coordinates: { x: 78, y: 37 }, population: 9700000, applicants: 14, hasElection: false, tier: 'metropolis' },
  { id: 'singapore', name: 'Singapore', country: 'Singapore', continent: 'Asia', coordinates: { x: 75, y: 55 }, population: 5900000, applicants: 8, hasElection: true, tier: 'major' },
  { id: 'hong_kong', name: 'Hong Kong', country: 'China', continent: 'Asia', coordinates: { x: 77, y: 45 }, population: 7500000, applicants: 9, hasElection: false, tier: 'major' },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', continent: 'Asia', coordinates: { x: 74, y: 52 }, population: 10600000, applicants: 7, hasElection: true, tier: 'major' },
  { id: 'jakarta', name: 'Jakarta', country: 'Indonesia', continent: 'Asia', coordinates: { x: 75, y: 60 }, population: 10600000, applicants: 11, hasElection: false, tier: 'major' },
  { id: 'manila', name: 'Manila', country: 'Philippines', continent: 'Asia', coordinates: { x: 78, y: 52 }, population: 13500000, applicants: 8, hasElection: true, tier: 'major' },
  { id: 'kuala_lumpur', name: 'Kuala Lumpur', country: 'Malaysia', continent: 'Asia', coordinates: { x: 74, y: 57 }, population: 1800000, applicants: 5, hasElection: false, tier: 'major' },
  { id: 'dubai', name: 'Dubai', country: 'UAE', continent: 'Asia', coordinates: { x: 62, y: 43 }, population: 3400000, applicants: 12, hasElection: true, tier: 'major' },
  { id: 'riyadh', name: 'Riyadh', country: 'Saudi Arabia', continent: 'Asia', coordinates: { x: 60, y: 43 }, population: 7000000, applicants: 6, hasElection: false, tier: 'major' },
  { id: 'tehran', name: 'Tehran', country: 'Iran', continent: 'Asia', coordinates: { x: 63, y: 40 }, population: 9000000, applicants: 4, hasElection: false, tier: 'major' },

  // Africa
  { id: 'cairo', name: 'Cairo', country: 'Egypt', continent: 'Africa', coordinates: { x: 57, y: 45 }, population: 20900000, applicants: 15, hasElection: true, tier: 'metropolis' },
  { id: 'lagos', name: 'Lagos', country: 'Nigeria', continent: 'Africa', coordinates: { x: 52, y: 60 }, population: 15400000, applicants: 12, hasElection: false, tier: 'metropolis' },
  { id: 'kinshasa', name: 'Kinshasa', country: 'DR Congo', continent: 'Africa', coordinates: { x: 54, y: 65 }, population: 17000000, applicants: 8, hasElection: true, tier: 'metropolis' },
  { id: 'johannesburg', name: 'Johannesburg', country: 'South Africa', continent: 'Africa', coordinates: { x: 57, y: 77 }, population: 5600000, applicants: 10, hasElection: false, tier: 'major' },
  { id: 'cape_town', name: 'Cape Town', country: 'South Africa', continent: 'Africa', coordinates: { x: 55, y: 79 }, population: 4600000, applicants: 7, hasElection: true, tier: 'major' },
  { id: 'casablanca', name: 'Casablanca', country: 'Morocco', continent: 'Africa', coordinates: { x: 48, y: 42 }, population: 3400000, applicants: 5, hasElection: false, tier: 'major' },
  { id: 'addis_ababa', name: 'Addis Ababa', country: 'Ethiopia', continent: 'Africa', coordinates: { x: 59, y: 58 }, population: 5200000, applicants: 4, hasElection: true, tier: 'major' },
  { id: 'nairobi', name: 'Nairobi', country: 'Kenya', continent: 'Africa', coordinates: { x: 59, y: 62 }, population: 5100000, applicants: 6, hasElection: false, tier: 'major' },
  { id: 'algiers', name: 'Algiers', country: 'Algeria', continent: 'Africa', coordinates: { x: 51, y: 41 }, population: 2400000, applicants: 3, hasElection: true, tier: 'major' },

  // Oceania
  { id: 'sydney', name: 'Sydney', country: 'Australia', continent: 'Oceania', coordinates: { x: 85, y: 75 }, population: 5300000, applicants: 9, hasElection: true, tier: 'metropolis' },
  { id: 'melbourne', name: 'Melbourne', country: 'Australia', continent: 'Oceania', coordinates: { x: 83, y: 77 }, population: 5200000, applicants: 8, hasElection: false, tier: 'metropolis' },
  { id: 'brisbane', name: 'Brisbane', country: 'Australia', continent: 'Oceania', coordinates: { x: 86, y: 73 }, population: 2600000, applicants: 4, hasElection: true, tier: 'major' },
  { id: 'auckland', name: 'Auckland', country: 'New Zealand', continent: 'Oceania', coordinates: { x: 90, y: 78 }, population: 1700000, applicants: 3, hasElection: false, tier: 'major' },
  { id: 'perth', name: 'Perth', country: 'Australia', continent: 'Oceania', coordinates: { x: 78, y: 76 }, population: 2100000, applicants: 2, hasElection: true, tier: 'major' },
];

export const countries: Country[] = [
  {
    id: 'us',
    name: 'United States',
    continent: 'North America',
    cities: worldCities.filter(city => city.country === 'United States')
  },
  {
    id: 'canada',
    name: 'Canada',
    continent: 'North America',
    cities: worldCities.filter(city => city.country === 'Canada')
  },
  {
    id: 'mexico',
    name: 'Mexico',
    continent: 'North America',
    cities: worldCities.filter(city => city.country === 'Mexico')
  },
  {
    id: 'brazil',
    name: 'Brazil',
    continent: 'South America',
    cities: worldCities.filter(city => city.country === 'Brazil')
  },
  {
    id: 'argentina',
    name: 'Argentina',
    continent: 'South America',
    cities: worldCities.filter(city => city.country === 'Argentina')
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    continent: 'Europe',
    cities: worldCities.filter(city => city.country === 'United Kingdom')
  },
  {
    id: 'france',
    name: 'France',
    continent: 'Europe',
    cities: worldCities.filter(city => city.country === 'France')
  },
  {
    id: 'germany',
    name: 'Germany',
    continent: 'Europe',
    cities: worldCities.filter(city => city.country === 'Germany')
  },
  {
    id: 'china',
    name: 'China',
    continent: 'Asia',
    cities: worldCities.filter(city => city.country === 'China')
  },
  {
    id: 'india',
    name: 'India',
    continent: 'Asia',
    cities: worldCities.filter(city => city.country === 'India')
  },
  {
    id: 'japan',
    name: 'Japan',
    continent: 'Asia',
    cities: worldCities.filter(city => city.country === 'Japan')
  },
  {
    id: 'australia',
    name: 'Australia',
    continent: 'Oceania',
    cities: worldCities.filter(city => city.country === 'Australia')
  },
];

export const continents = [
  'North America',
  'South America',
  'Europe',
  'Asia',
  'Africa',
  'Oceania'
];

export const getCitiesByContinent = (continent: string): City[] => {
  return worldCities.filter(city => city.continent === continent);
};

export const getCitiesByCountry = (country: string): City[] => {
  return worldCities.filter(city => city.country === country);
};

export const searchCities = (query: string): City[] => {
  const searchTerm = query.toLowerCase();
  return worldCities.filter(city => 
    city.name.toLowerCase().includes(searchTerm) ||
    city.country.toLowerCase().includes(searchTerm) ||
    city.continent.toLowerCase().includes(searchTerm)
  );
};