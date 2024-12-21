'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { day: 'Mon', incoming: 32, answered: 28, expertsOnline: 25 },
  { day: 'Tue', incoming: 35, answered: 27, expertsOnline: 28 },
  { day: 'Wed', incoming: 40, answered: 32, expertsOnline: 30 },
  { day: 'Thu', incoming: 45, answered: 35, expertsOnline: 35 },
  { day: 'Fri', incoming: 48, answered: 38, expertsOnline: 32 },
  { day: 'Sat', incoming: 52, answered: 35, expertsOnline: 30 },
  { day: 'Sun', incoming: 55, answered: 38, expertsOnline: 28 },
];

export default function ConsultationChart() {
  return (
    <Card className="xl:w-[60%]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Image
            src="/icons/consultations.svg"
            alt="Consultation"
            width={10}
            height={10}
          />
          CONSULTATIONS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666' }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666' }}
                domain={[0, 60]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666' }}
                domain={[0, 20]}
                ticks={[0, 5, 10, 15, 20]}
              />
              <Bar
                dataKey="expertsOnline"
                yAxisId="right"
                fill="rgba(255, 220, 140, 0.4)"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
              <Line
                type="monotone"
                dataKey="incoming"
                yAxisId="left"
                stroke="#999"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="answered"
                yAxisId="left"
                stroke="#2DD4BF"
                strokeWidth={2}
                dot={false}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                content={({ payload }) => (
                  <div className="flex justify-center gap-6 text-sm text-gray-500">
                    {payload?.map((entry, index) => (
                      <div
                        key={`item-${index}`}
                        className="flex items-center gap-2"
                      >
                        {entry.dataKey === 'incoming' ? (
                          <div className="h-[2px] w-8 border-t-2 border-dashed border-gray-400" />
                        ) : entry.dataKey === 'answered' ? (
                          <div className="h-[2px] w-8 bg-[#2DD4BF]" />
                        ) : (
                          <div className="h-3 w-8 rounded bg-[rgba(255,220,140,0.4)]" />
                        )}
                        <span>
                          {entry.dataKey === 'incoming'
                            ? 'Incoming'
                            : entry.dataKey === 'answered'
                            ? 'Answered'
                            : 'Experts online'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
