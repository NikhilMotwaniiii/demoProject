import React from 'react';
import Image from 'next/image';

const afterRoutes = [
  {
    name: '',
    layout: '',
    path: '',
    icon: (
      <Image
        src="/img/assets/profileLogo.png"
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
        src="/img/assets/premiumLogo.png"
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
];

export default afterRoutes;
