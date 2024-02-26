import Image from "next/image";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import backgroundPattern from "../public/backgroundPattern.png";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main
      className="w-full overflow-x-clip bg-opacity-5"
      style={{ backgroundImage: `url(${backgroundPattern.src})` }}
    >
      <Nav />
      <div className="">
        <Header />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
