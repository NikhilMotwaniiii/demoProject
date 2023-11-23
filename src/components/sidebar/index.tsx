/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';
import Image from 'next/image';
import { IRoute } from 'types/navigation';
import afterRoutes from 'afterRoutes';

function Sidebar(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 linear shadow-black fixed !z-50 flex min-h-full flex-col items-center bg-white pb-10 shadow-2.5xl transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
      }`}
    >
      <span
        className="absolute block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={` w-15 mb-5 mt-8 flex h-20 items-center justify-center `}>
        <div className="flex h-full w-full items-center justify-center ">
          <Image
            src="/img/assets/D_Logo_1.png"
            alt="hii"
            width={0}
            height={0}
            className="h-20 w-20"
          />
        </div>
      </div>
      <div className="mb-5 h-1 w-9 bg-[#DDDCDC]" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
      <div className="mb-3 mt-5 h-1 w-9 bg-[#DDDCDC]" />
      <ul className="mb-auto pt-1">
        <Links routes={afterRoutes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
}

export default Sidebar;
