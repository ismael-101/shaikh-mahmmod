import Image from "next/image";
import Header from "./components/Main/Header";
import About from "./components/Main/About";
import Services from "./components/Main/Services";
import Contact from "./components/Main/Contact";
import Footer from "./components/Main/Footer";
import backgroundPattern from "../public/backgroundPattern.png";

import ThemeSwitcher from "./components/Animations/ThemeSwitcher";
import Menu from "./components/utils/Menu";

export default function Home() {
  return (
    <main
      className="w-full overflow-x-clip bg-opacity-5"
      style={{ backgroundImage: `url(${backgroundPattern.src})` }}
    >
      <span className="fixed top-5 left-3 text-xs cursor-pointer">
        الشيخ محمود
      </span>
      <ThemeSwitcher />
      <Menu />
      <div>
        <Header />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
