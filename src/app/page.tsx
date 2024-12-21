'use client';

import { AppSidebar } from '@/components/app-sidebar';
import Glance from '@/components/glance';
import Insights from '@/components/insights';
import Orders from '@/components/orders';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { HEADER_TABS } from '@/data';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { HeaderTabProps } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

export default function Dashboard() {
  const [headerTabs, setHeaderTabs] = useState<HeaderTabProps>('Summary');
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="space-y-8 mb-5">
        <header className="flex h-20 items-center gap-2 border-b">
          <div className="flex items-center justify-between gap-2 px-3 w-full">
            {isMobile && <SidebarTrigger />}

            <div className="flex items-center gap-x-4">
              {HEADER_TABS.map((tab) => (
                <button
                  onClick={() => setHeaderTabs(tab.name as HeaderTabProps)}
                  key={tab.id}
                  className={cn(
                    'flex items-center justify-between gap-x-1 sm:gap-x-3',
                    headerTabs === tab.name &&
                      'border bg-[#CCFBEF] border-transparent rounded-full px-3 py-2',
                  )}
                >
                  <Image
                    src={tab.iconSrc}
                    alt={tab.iconAlt}
                    width={20}
                    height={20}
                  />
                  <p className="text-[#8A94A6] text-xs sm:text-base">
                    {tab.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="w-[95%] mx-auto border rounded-2xl shadow-sm p-7 space-y-10">
          <Glance />
          <Insights />
          <Orders />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
