"use client";

import { useThemeStore } from "@/store";
import { ReactNode, useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydrated ? (
        <body data-theme={themeStore.mode} className={inter.className}>
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
