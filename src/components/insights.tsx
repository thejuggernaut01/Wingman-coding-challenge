import React from 'react';
import PastPeriodChart from './charts/past-period-chart';
import Forecast from './charts/forecast-chart';
import Consultation from './charts/consultation-chart';

const Insights = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <h3 className="font-medium text-2xl sm:text-3xl">Insights</h3>
        <div className="space-y-5 xl:space-y-0 xl:flex gap-x-6">
          <Consultation />

          <div className="space-y-5 md:space-y-0 md:flex gap-x-5">
            <PastPeriodChart />
            <Forecast />
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
