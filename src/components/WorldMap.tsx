import { useState } from 'react';
import { Search, Users, Crown, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import futuristicWorldMap from '@/assets/futuristic-world-map.jpg';

interface Territory {
  id: string;
  name: string;
  applicants: number;
  hasElection: boolean;
  governor?: string;
  coordinates: { x: number; y: number };
}

interface User {
  name: string;
  tier: 'basic' | 'gold' | 'platinum';
  referrals: number;
}

const mockTerritories: Territory[] = [
  { id: '1', name: 'New York', applicants: 5, hasElection: true, coordinates: { x: 25, y: 35 } },
  { id: '2', name: 'London', applicants: 3, hasElection: false, coordinates: { x: 50, y: 30 } },
  { id: '3', name: 'Tokyo', applicants: 7, hasElection: true, governor: 'Akira Tanaka', coordinates: { x: 80, y: 40 } },
  { id: '4', name: 'Sydney', applicants: 2, hasElection: false, coordinates: { x: 85, y: 70 } },
  { id: '5', name: 'São Paulo', applicants: 4, hasElection: true, coordinates: { x: 30, y: 65 } },
];

const WorldMap = () => {
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [user] = useState<User>({ name: 'John Doe', tier: 'platinum', referrals: 150 });
  const [zoomLevel, setZoomLevel] = useState(1);

  const filteredTerritories = mockTerritories.filter(territory =>
    territory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTerritoryClick = (territory: Territory) => {
    setSelectedTerritory(territory);
    setZoomLevel(2);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredTerritories.length > 0) {
      handleTerritoryClick(filteredTerritories[0]);
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

      {/* Search Bar */}
      <div className="relative z-10 p-6 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-primary animate-hologram" />
              <Input
                placeholder="Search for a city or territory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card/80 border-primary/30 focus:border-primary focus:ring-primary/20 transition-all duration-300"
              />
            </div>
            <Button type="submit" variant="election" className="shadow-lg shadow-election/30">
              Search
            </Button>
          </form>
        </div>
      </div>

      <div className="relative z-10 flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="flex-1">
          <Card className="bg-card/80 backdrop-blur-md border-primary/20 shadow-xl shadow-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <MapPin className="w-5 h-5 text-primary animate-glow-pulse" />
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
                {filteredTerritories.map((territory) => (
                  <button
                    key={territory.id}
                    onClick={() => handleTerritoryClick(territory)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white/80 shadow-lg transition-all duration-300 hover:scale-150 hover:shadow-xl group ${
                      territory.hasElection 
                        ? 'bg-gradient-to-r from-election to-accent animate-glow-pulse shadow-election/50' 
                        : territory.governor 
                        ? 'bg-gradient-to-r from-gold to-gold/80 animate-glow-pulse shadow-gold/50' 
                        : 'bg-gradient-to-r from-territory to-secondary hover:shadow-territory/50'
                    }`}
                    style={{
                      left: `${territory.coordinates.x}%`,
                      top: `${territory.coordinates.y}%`,
                    }}
                    title={territory.name}
                  >
                    {/* Inner glow effect */}
                    <div className="absolute inset-1 rounded-full bg-white/20 animate-hologram"></div>
                  </button>
                ))}
                
                {selectedTerritory && (
                  <div 
                    className="absolute transform -translate-x-1/2 -translate-y-full bg-card/90 backdrop-blur-md border border-primary/30 rounded-lg p-3 shadow-xl shadow-primary/20 z-10 animate-glow-pulse"
                    style={{
                      left: `${selectedTerritory.coordinates.x}%`,
                      top: `${selectedTerritory.coordinates.y}%`,
                    }}
                  >
                    <div className="text-sm font-semibold text-primary">{selectedTerritory.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {selectedTerritory.applicants} applicants
                    </div>
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
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary animate-hologram" />
                  <span>{selectedTerritory.applicants} Applicants</span>
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