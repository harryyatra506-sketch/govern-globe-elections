# Crypto Electoral Governance Platform - Clone Prompt

## Overview
Create a futuristic global electoral governance platform for crypto territories with the following specifications:

## Core Features Required

### 1. Interactive World Map Interface
- Futuristic holographic world map with glowing territorial boundaries
- Animated scanning lines and data flow effects across continents
- Size-coded markers for different city tiers (Metropolis, Major, City)
- Color-coded status indicators (Active elections, Crypto-friendly, Governor positions)
- Hover effects showing detailed territory information
- Responsive design with backdrop blur effects

### 2. Comprehensive World Database
Create a complete database including:
- **195+ Countries** with:
  - Population data
  - Crypto regulation status (Friendly/Neutral/Restricted)
  - Continent classification
  - Country codes
- **200+ Major Cities** with:
  - Real population data
  - City tier classification (Metropolis/Major/City)
  - Capital city indicators
  - Crypto-friendly status
  - Governor position availability
  - Active election status

### 3. Interactive Search System
- Real-time dropdown search for countries and cities
- Keyboard navigation support (Arrow keys, Enter, Escape)
- Multi-category results display (Countries vs Cities)
- Visual indicators for crypto status and special positions
- Population formatting (M for millions, K for thousands)
- Animated search results with futuristic styling

### 4. Visual Design System
- **Color Scheme**: Dark cyberpunk theme with neon accents
- **Animations**: 
  - Holographic glow effects (3s pulse)
  - Scanning line animations
  - Grid overlay patterns
  - Particle/data flow effects
- **Typography**: Gradient text effects with glow
- **UI Elements**: Glass morphism with backdrop blur
- **Semantic Tokens**: HSL color system with design tokens

### 5. Territory Management Features
- Interactive territory markers with detailed hover states
- Progress indicators for election processes
- Badge system for special roles (Governor, Capital, Crypto-friendly)
- Filtering capabilities by continent, country, and status
- Expandable territory details with statistics

## Technical Requirements

### Frontend Stack
- React 18+ with TypeScript
- Tailwind CSS with custom design system
- Lucide React icons
- Responsive design patterns

### Key Components Structure
```
src/
├── components/
│   ├── WorldMap.tsx (Main map interface)
│   ├── InteractiveSearch.tsx (Search functionality)
│   └── ui/ (Shadcn components)
├── data/
│   └── completeWorldData.ts (World database)
└── assets/
    └── futuristic-world-map.jpg
```

### Custom CSS Features
```css
/* Key animations and effects needed */
@keyframes glow-pulse { /* 3s glow effect */ }
@keyframes hologram { /* Holographic shimmer */ }
@keyframes scan-line { /* Scanning animation */ }
@keyframes data-flow { /* Data stream effect */ }

/* Color tokens required */
--primary: [Neon blue HSL]
--accent: [Neon purple HSL]
--gold: [Golden HSL]
--election: [Electric blue HSL]
--territory: [Teal HSL]
```

## User Experience Flow
1. User sees animated futuristic world map on load
2. Interactive search allows quick territory lookup
3. Hover states provide detailed territory information
4. Click interactions show expanded territory details
5. Visual indicators communicate crypto-friendliness and election status
6. Smooth animations enhance the sci-fi aesthetic

## Data Structure Example
```typescript
interface CountryData {
  id: string;
  name: string;
  code: string;
  continent: string;
  population: number;
  cryptoRegulation: 'friendly' | 'neutral' | 'restricted';
}

interface CityData {
  id: string;
  name: string;
  country: string;
  population: number;
  tier: 'metropolis' | 'major' | 'city';
  isCapital: boolean;
  cryptoFriendly: boolean;
  hasElection: boolean;
  governor?: string;
}
```

## Special Instructions
- Implement all countries from UN member states list (195 countries)
- Include major cities with accurate population data
- Use futuristic sci-fi design aesthetic throughout
- Ensure mobile responsiveness
- Add loading states with futuristic animations
- Include error handling with themed error states
- Optimize for performance with lazy loading where appropriate

## Advanced Features to Include
- Real-time election status updates
- Territory statistics dashboard
- Governor application system foundation
- Voting eligibility indicators for "gold users"
- Multi-language support preparation
- Dark/light mode toggle (default dark)

This prompt will recreate a complete crypto electoral governance platform with futuristic aesthetics and comprehensive world data management.