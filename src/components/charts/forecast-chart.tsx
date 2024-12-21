import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Forecast() {
  return (
    <Card className="min-h-[200px] w-full max-w-md bg-gradient-to-br from-[#15B79F] to-[#0E9382] text-white flex-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium opacity-90">
          <Image
            src="/icons/chat-tear-drop.svg"
            alt="Forecast"
            width={20}
            height={20}
          />
          FORECASTS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">+15%</span>
            <TrendingUp className="h-5 w-5" />
          </div>
          <p className="text-sm leading-tight opacity-90">
            forecasted increase in your sales closed by the end of the current
            month
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">+20%</span>
            <TrendingUp className="h-5 w-5" />
          </div>
          <p className="text-sm leading-tight opacity-90">
            forecasted increase in consultations by the end of the current month
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
