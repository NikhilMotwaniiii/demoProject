/* eslint-disable */
import React from 'react';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from 'components/link/NavLink';

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  const pathname = usePathname();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName);
    },
    [pathname],
  );

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      return (
        <NavLink key={index} href={route.layout + '/' + route.path}>
          <div className="relative mb-2 flex items-center justify-center hover:cursor-pointer">
            <li
              className="my-[2px] cursor-pointer items-center px-2"
              key={index}
            >
              <span
                className={`${
                  activeRoute(route.path) === true
                    ? 'font-bold text-brand-500 dark:text-white'
                    : 'font-medium text-gray-600'
                }`}
              >
                {route.icon}
              </span>
            </li>
          </div>
        </NavLink>
      );
    });
  };
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
