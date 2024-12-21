'use client';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { SIDE_NAV } from '@/data';
import Image from 'next/image';
import { SideNavProps } from '@/types';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [sideNav, _] = React.useState<SideNavProps>('Home');
  const isMobile = useIsMobile();

  return (
    <Sidebar className="bg-[#115E56] text-white" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <button>
                <Image
                  src="/icons/wingman-logo.svg"
                  alt="Wingman Logo"
                  width={30}
                  height={30}
                />
                {isMobile && <p className="font-semibold">Wingman</p>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="space-y-2 mt-5">
            {SIDE_NAV.map((nav) => (
              <SidebarMenuItem key={nav.title}>
                <SidebarMenuButton
                  asChild
                  // onClick={() => setSideNav(nav.title as SideNavProps)}
                >
                  <div
                    className={cn(
                      'flex items-center',
                      sideNav !== nav.title && 'space-x-2',
                    )}
                  >
                    <div
                      className={cn(
                        sideNav === nav.title &&
                          'bg-[#FFFFFF] rounded-[8px] p-2',
                      )}
                    >
                      <Image
                        src={nav.iconSrc}
                        alt={nav.iconAlt}
                        width={20}
                        height={20}
                      />
                    </div>
                    {isMobile && (
                      <a href={nav.url} className="font-medium">
                        {nav.title}
                      </a>
                    )}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
