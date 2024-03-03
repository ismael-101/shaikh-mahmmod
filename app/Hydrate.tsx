"use client";

import Lenis from "@studio-freight/lenis";
import { useThemeStore } from "@/store";
import { ReactNode, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import backgroundPattern from "../public/backgroundPattern.png";

const inter = Inter({ subsets: ["latin"] });

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {isHydrated ? (
        <body
          data-theme={themeStore.mode}
          className={inter.className}
          style={{ backgroundImage: `url(${backgroundPattern.src})` }}
        >
          {children}
        </body>
      ) : (
        <body className="flex font-bold h-screen text-6xl items-center justify-center text-primary">
          <h1>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h1>
        </body>
      )}
    </>
  );
}
