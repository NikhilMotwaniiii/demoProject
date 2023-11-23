import React from 'react';

export default function RootHead() {
  return (
    <>
      <link rel="apple-touch-icon" href="" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={process.env.NEXT_PUBLIC_BASE_PATH || ''}
      />

      <title>NextJS Demo</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </>
  );
}
