import { Crown, Share2, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import platinumBadge from '@/assets/platinum-badge.png';

interface QualificationBadgeProps {
  userTier: 'basic' | 'gold' | 'platinum';
  userName: string;
  referrals: number;
}

const QualificationBadge = ({ userTier, userName, referrals }: QualificationBadgeProps) => {
  const handleShare = () => {
    const shareText = `🏛️ I've achieved ${userTier.toUpperCase()} status on GovernGlobe Elections! Join me in shaping the future of global governance. 🌍`;
    
    if (navigator.share) {
      navigator.share({
        title: 'GovernGlobe Elections Achievement',
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
    }
  };

  const handleDownload = () => {
    // Create a canvas to generate the badge image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 200;

    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    if (userTier === 'platinum') {
      gradient.addColorStop(0, '#e5e7eb');
      gradient.addColorStop(1, '#9ca3af');
    } else if (userTier === 'gold') {
      gradient.addColorStop(0, '#fbbf24');
      gradient.addColorStop(1, '#d97706');
    } else {
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#1d4ed8');
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${userTier.toUpperCase()} MEMBER`, canvas.width / 2, 80);
    
    ctx.font = '18px Arial';
    ctx.fillText(userName, canvas.width / 2, 120);
    
    ctx.font = '14px Arial';
    ctx.fillText('GovernGlobe Elections', canvas.width / 2, 160);

    // Download the image
    const link = document.createElement('a');
    link.download = `${userName}-${userTier}-badge.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const getProgressToNext = () => {
    if (userTier === 'basic') {
      return { current: referrals, target: 50, next: 'Gold' };
    } else if (userTier === 'gold') {
      return { current: referrals, target: 100, next: 'Platinum' };
    }
    return null;
  };

  const progress = getProgressToNext();

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          {userTier === 'platinum' ? (
            <img src={platinumBadge} alt="Platinum Badge" className="w-16 h-16" />
          ) : (
            <Crown className={`w-16 h-16 ${userTier === 'gold' ? 'text-gold' : 'text-muted-foreground'}`} />
          )}
        </div>
        <CardTitle className="flex items-center justify-center gap-2">
          <Badge 
            variant={userTier === 'platinum' ? 'default' : userTier === 'gold' ? 'secondary' : 'outline'}
            className="text-lg px-4 py-2"
          >
            {userTier.toUpperCase()} MEMBER
          </Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{userName}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">{referrals}</div>
          <div className="text-sm text-muted-foreground">Total Referrals</div>
        </div>

        {progress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to {progress.next}</span>
              <span>{progress.current}/{progress.target}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  userTier === 'gold' ? 'bg-gold' : 'bg-primary'
                }`}
                style={{ width: `${Math.min((progress.current / progress.target) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        )}

        {userTier === 'platinum' && (
          <div className="bg-gold/10 border border-gold/20 rounded-lg p-3 text-center">
            <Crown className="w-6 h-6 text-gold mx-auto mb-2" />
            <div className="text-sm font-medium text-gold-foreground">
              Eligible for Governor Applications
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleShare}
            className="flex-1"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownload}
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QualificationBadge;