"use client";

import { motion, useScroll } from "framer-motion";
import { certificates } from "../utils/certificate";
import Card from "../utils/Card";
import { useEffect, useRef } from "react";
import { Paragraph, ScrollParagraphProps } from "../Animations/TextAnimation";

export default function About() {
  const { hello, el } = Paragraph() as ScrollParagraphProps;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div id="about" ref={el} style={{ opacity: hello }}>
      <div ref={container}>
        <div className="sticky top-12 bg-[#6B705C] p-5 pb-7 my-5 rounded-xl text-end w-[60vw] m-auto text-[#f2f8df]">
          <h1 className="lg:text-2xl text-base">
            على مدار السنوات الماضية منذ العام 2002 الى اليوم و بفضل من الله
            حصلت على المؤهلات التالية
          </h1>
        </div>

        {certificates.map((certificate, i) => {
          const targetScale = 1 - (certificates.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              {...certificate}
              i={i}
              range={[(i / certificates.length) * 0.25, 1]}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
