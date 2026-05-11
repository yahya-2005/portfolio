'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const UnicornScene = dynamic(
  () => import('unicornstudio-react').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-b from-black via-emerald-900/20 to-black" />
    ),
  }
);

export default function HeroBackground() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full bg-gradient-to-b from-black via-emerald-900/20 to-black" />
      }
    >
      <UnicornScene
        projectId="YDOiMnYpNLZWBOx4H6IL"
        width="100%"
        height="100%"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.12/dist/unicornStudio.umd.js"
      />
    </Suspense>
  );
}
