import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { data: 'This week', consultation: 186, ordersClosed: 80 },
  { data: 'Last week', consultation: 305, ordersClosed: 200 },
];

const chartConfig = {
  consultation: {
    label: 'Consultation',
    color: '#CCFBEF',
  },
  ordersClosed: {
    label: 'Orders',
    color: '#134E48',
  },
} satisfies ChartConfig;

const PastPeriodChart = () => {
  return (
    <>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full border rounded-[8px] shadow-sm flex-1"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="data"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="consultation"
            fill="var(--color-consultation)"
            radius={4}
          />
          <Bar
            dataKey="ordersClosed"
            fill="var(--color-ordersClosed)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </>
  );
};

export default PastPeriodChart;
