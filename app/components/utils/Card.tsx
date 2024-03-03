"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useThemeStore } from "@/store";
import { cn } from "./utils";

export default function Card({
  title,
  description,
  src,
  url,
  color,
  i,
  progress,
  range,
  targetScale,
}: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const theme = useThemeStore();

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-6"
    >
      <motion.div
        className={cn(
          " w-[1000px] h-[500px] flex flex-col relative rounded-3xl p-12 -top-10 ",
          theme.mode === "business" && "text-neutral"
        )}
        key={i}
        style={{
          scale,
          backgroundColor: color,
          transformOrigin: "top",
          top: `calc(-10% + ${i * 25}px)`,
        }}
      >
        <h2 className="m-0 lg:text-2xl text-xl text-end pr-12 ">{title}</h2>
        <div className="flex h-full m-12 gap-12">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-base text-end">{description}</p>
          </div>
          <div className="relative w-[60%] h-full rounded-3xl overflow-hidden">
            <motion.div
              className=" w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image className="object-cover" fill src={src} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
