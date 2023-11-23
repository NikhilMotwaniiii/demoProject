import React from 'react';
import Image from 'next/image';

const routes = [
  {
    name: '',
    layout: '',
    path: '',
    icon: (
      <Image
        src="/img/assets/homebuttonLogo.png"
        alt="hii"
        width={0}
        height={0}
        className="h-16 w-16 hover:scale-105"
      />
    ),
  },
  {
    name: '',
    layout: '',
    path: '',
    icon: (
      <Image
        src="/img/assets/assetsLogo.png"
        alt="hii"
        width={0}
        height={0}
        className="h-16 w-16 hover:scale-105"
      />
    ),

    secondary: true,
  },
  {
    name: '',
    layout: '',
    icon: (
      <Image
        src="/img/assets/COMMUNITYLogo.png"
        alt="hii"
        width={0}
        height={0}
        className="h-16 w-16 hover:scale-105"
      />
    ),
    path: '',
  },
  {
    name: '',
    layout: '',
    path: '',
    icon: (
      <Image
        src="/img/assets/FAQLogo.png"
        alt="hii"
        width={0}
        height={0}
        className="h-16 w-16 hover:scale-105"
      />
    ),
  },
];

export default routes;
