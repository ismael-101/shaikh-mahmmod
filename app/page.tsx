"use client";
import Image from "next/image";
import Hero from "./components/Main/Hero";
import About from "./components/Main/About";
import Services from "./components/Main/Services";
import Contact from "./components/Main/Contact";
import Footer from "./components/Main/Footer";
import Link from "next/link";
import ThemeSwitcher from "./components/Animations/ThemeSwitcher";
import Menu from "./components/utils/Menu";

import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <header className="w-full overflow-x-clip bg-opacity-5">
        <Link href="/">
          <span className="fixed top-5 left-3 text-xs cursor-pointer z-50">
            الشيخ محمود
          </span>
        </Link>
        <ThemeSwitcher />
        <Menu />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </AnimatePresence>
  );
}
