import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';

// interface SidebarItem {
//   name: string;
//   href: string;
//   icon: React.ComponentType;
// }

const sidebarItems = [
  {
    name: 'Image Generation',
    href: '/',
    color: 'Blue',
    hoverColor: '#42FFB0',
    icon: (
      <Image
        src="/img/assets/Vector1leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Image Revision',
    href: '/mails',
    color: 'Blue',
    hoverColor: '#42FFB0',
    icon: (
      <Image
        src="/img/assets/tune2leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Expand Image',
    href: '/contact',
    color: 'Blue',
    hoverColor: '#42FFB0',
    icon: (
      <Image
        src="/img/assets/Vector3leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Erase & Replace',
    href: '/',
    color: 'Purple',
    hoverColor: '#B455FF',
    icon: (
      <Image
        src="/img/assets/Vector4leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Animate Image',
    href: '/about',
    color: 'Pink',
    hoverColor: '#F900FE',
    icon: (
      <Image
        src="/img/assets/Vector5leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Image Retouch',
    href: '/mails',
    color: 'Pink',
    hoverColor: '#F900FE',
    icon: (
      <Image
        src="/img/assets/Vector6leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Infinite Zoom',
    href: '/contact',
    color: 'Pink',
    hoverColor: '#F900FE',
    icon: (
      <Image
        src="/img/assets/pinch_zoom_in7leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Vision Assistant',
    href: '/mails',
    color: 'Orange',
    hoverColor: '#FFC480',
    icon: (
      <Image
        src="/img/assets/Maskgroup8leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-6 w-8"
      />
    ),
  },
  {
    name: 'Image to Image',
    href: '/contact',
    color: 'Orange',
    hoverColor: '#FFC480',
    icon: (
      <Image
        src="/img/assets/Vector9leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
  {
    name: 'Image to Melody',
    href: '/contact',
    color: 'Orange',
    hoverColor: '#FFC480',
    icon: (
      <Image
        src="/img/assets/Vector10leftColBar.png"
        alt="hii"
        width={0}
        height={0}
        className="h-7 w-8"
      />
    ),
  },
];

const ScrollSidebar1: React.FC = () => {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <div className="relative h-full">
      <button
        className="border-1 absolute right-0 top-[4.7rem] flex h-[1.5rem] w-[1.5rem] translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-[#e5e7eb] bg-[#fff] text-[1.1rem]"
        onClick={() => {
          setCollapse(!isCollapsed);
          console.log(isCollapsed);
        }}
      >
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside
        className="shadow-black duration-400 h-full overflow-hidden rounded-2xl rounded-b-[40px] rounded-t-[40px] border border-[#fff] bg-[#fff] p-4  shadow-4xl transition-all ease-in-out"
        data-collapse={isCollapsed}
      >
        <ul className="scrollSidebar1__list">
          {sidebarItems.map(({ name, href, color, hoverColor, icon }) => {
            return (
              <li
                className={`scrollSidebar1__item relative ${
                  isCollapsed ? '' : 'mx-4'
                }  my-5 rounded-[0.8rem] bg-[#f3f4f6] bg-gradient-to-r
                ${
                  color === 'Blue' ? 'shadow-boxBlue hover:from-[#42FFB0]' : ''
                } ${
                  color === 'Purple'
                    ? 'shadow-boxPurple hover:from-[#B455FF]'
                    : ''
                } ${
                  color === 'Pink' ? 'shadow-boxPink hover:from-[#F900FE]' : ''
                } ${
                  color === 'Orange'
                    ? 'shadow-boxOrange hover:from-[#FFC480]'
                    : ''
                } hover:scale-105`}
                key={name}
              >
                <Link className={`scrollSidebar1__link py-4 `} href={href}>
                  <span className="scrollSidebar1__icon h-7 w-8">{icon}</span>
                  <span className="scrollSidebar1__name font-medium">
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default ScrollSidebar1;
