import { useState } from 'react';
import { Search, Users, Crown, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import worldMapBg from '@/assets/world-map-bg.jpg';

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-foreground">GovernGlobe Elections</h1>
            <Badge variant={user.tier === 'platinum' ? 'default' : 'secondary'} className="text-sm">
              {user.tier.toUpperCase()} MEMBER
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Referrals: <span className="font-semibold text-gold">{user.referrals}</span>
            </div>
            {user.tier === 'platinum' && (
              <Crown className="w-5 h-5 text-gold" />
            )}
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-6 bg-muted/30">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for a city or territory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" variant="election">
              Search
            </Button>
          </form>
        </div>
      </div>

      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Global Electoral Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="relative w-full h-96 bg-cover bg-center rounded-lg border overflow-hidden"
                style={{ backgroundImage: `url(${worldMapBg})` }}
              >
                <div className="absolute inset-0 bg-primary/10"></div>
                
                {/* Territory Markers */}
                {filteredTerritories.map((territory) => (
                  <button
                    key={territory.id}
                    onClick={() => handleTerritoryClick(territory)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:scale-150 ${
                      territory.hasElection 
                        ? 'bg-election animate-pulse' 
                        : territory.governor 
                        ? 'bg-gold' 
                        : 'bg-territory'
                    }`}
                    style={{
                      left: `${territory.coordinates.x}%`,
                      top: `${territory.coordinates.y}%`,
                    }}
                    title={territory.name}
                  />
                ))}
                
                {selectedTerritory && (
                  <div 
                    className="absolute transform -translate-x-1/2 -translate-y-full bg-card border rounded-lg p-2 shadow-lg z-10"
                    style={{
                      left: `${selectedTerritory.coordinates.x}%`,
                      top: `${selectedTerritory.coordinates.y}%`,
                    }}
                  >
                    <div className="text-sm font-semibold">{selectedTerritory.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {selectedTerritory.applicants} applicants
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Territory Details */}
        <div className="w-80">
          {selectedTerritory ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {selectedTerritory.name}
                  {selectedTerritory.hasElection && (
                    <Badge variant="destructive">ELECTION ACTIVE</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{selectedTerritory.applicants} Applicants</span>
                </div>

                {selectedTerritory.governor && (
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/20">
                    <div className="text-sm font-medium text-gold-foreground">Current Governor</div>
                    <div className="text-lg font-bold">{selectedTerritory.governor}</div>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-sm font-medium">Application Status</div>
                  {user.tier === 'platinum' ? (
                    <Button variant="election" className="w-full">
                      Apply for Governor
                    </Button>
                  ) : user.tier === 'gold' ? (
                    <div className="text-sm text-muted-foreground">
                      Reach 100 referrals to unlock governor applications
                      <div className="mt-2">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gold h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min((user.referrals / 100) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-1">{user.referrals}/100 referrals</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      Upgrade to Gold membership to track progress
                    </div>
                  )}
                </div>

                {selectedTerritory.hasElection && (
                  <div className="border-t pt-4">
                    <div className="text-sm font-medium mb-2">Active Candidates</div>
                    <div className="space-y-2">
                      {['Sarah Johnson', 'Michael Chen', 'Elena Rodriguez'].map((candidate, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <span className="text-sm">{candidate}</span>
                          <Button variant="outline" size="sm">
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
            <Card>
              <CardHeader>
                <CardTitle>Select a Territory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-8">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
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