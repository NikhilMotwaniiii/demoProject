'use client';
// Layout components
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import routes from 'routes';
import { isWindowAvailable } from 'utils/navigation';
import React from 'react';

import Sidebar from 'components/sidebar';

export default function Demo({ children }: { children: React.ReactNode }) {
  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="demo" />
      {/* Navbar & Main Content */}
      <div className="h-full w-full font-dm">
        {/* Main Content */}
        <main
          className={`mx-2.5  flex-none transition-all 
              md:pr-2 xl:ml-[100px]`}
        >
          {/* Routes */}
          <div>
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
            <div className="p-3"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
