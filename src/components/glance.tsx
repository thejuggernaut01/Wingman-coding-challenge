import { FILTER_DATA, GLANCE_DATA } from '@/data/glance.data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Glance = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-2xl sm:text-3xl">At a glance</h3>
          <Select>
            <SelectTrigger className="w-[128px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              {FILTER_DATA.map((filter) => (
                <SelectItem key={filter.id} value={filter.name}>
                  {filter.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid auto-rows-min gap-4 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {GLANCE_DATA.map((data) => (
            <div key={data.id} className="aspect-auto rounded-xl shadow p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-x-2">
                  <Image
                    src={data.iconSrc}
                    alt={data.iconAlt}
                    width={10}
                    height={10}
                  />
                  <p className="text-[#8A94A6] text-xs font-medium">
                    {data.title}
                  </p>
                </div>
                <p className="font-medium text-3xl">{data.amount}</p>
                <div className="flex items-center gap-x-2">
                  <Image
                    src={
                      data.profit
                        ? '/icons/trend-up.svg'
                        : data.loss
                        ? '/icons/trend-down.svg'
                        : ''
                    }
                    alt={data.profit ? 'Up trend' : 'Down trend'}
                    width={15}
                    height={15}
                  />
                  <p className="space-x-1">
                    <span
                      className={cn(
                        data.profit ? 'text-[#15B79F]' : 'text-[#F04438]',
                      )}
                    >
                      {data.profit ? data.profit : data.loss}%
                    </span>
                    <span className="text-[#667085] text-sm">increase</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Glance;
