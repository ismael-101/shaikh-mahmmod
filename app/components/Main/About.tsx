"use client";

import { motion, useScroll } from "framer-motion";
import { certificates } from "../utils/certificate";
import Card from "../utils/Card";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div id="about" ref={container}>
      {certificates.map((certificate, i) => {
        const targetScale = 1 - (certificates.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            {...certificate}
            i={i}
            range={[i * 0.25, 1]}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
