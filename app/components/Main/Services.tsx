"use client";
import { services } from "../utils/services";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Paragraph, ScrollParagraphProps } from "../Animations/TextAnimation";
import { cn } from "../utils/utils";
import { useThemeStore } from "@/store";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  close: { width: 0 },
};

export default function Services() {
  const { hello, el } = Paragraph() as ScrollParagraphProps;

  return (
    //main div
    <motion.div
      id="services"
      ref={el}
      style={{ opacity: hello }}
      className="h-screen flex items-start justify-center"
    >
      {/* gallery div */}
      <div className="w-[70%]">
        <h1 className="text-right mb-10 mt-10 lg:text-2xl text-lg bg-secondary text-secondary-content p-3 rounded-xl underline underline-offset-8">
          : خدماتي عبر الاون لاين
        </h1>
        {services.map((service, index) => {
          return <Service service={service} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function Service({ service }: { service: any }) {
  const [isActive, setIsActive] = useState(false);
  const { mode } = useThemeStore();

  return (
    // service div
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={cn(
        "rounded-t-sm border-b-[1px] pt-[0.8vw] pb-[0.8vw] cursor-pointer w-full  flex justify-center items-center   h-full",
        mode === "retro" && "border-neutral border-b-2"
      )}
    >
      <h2 className="text-lg lg:text-xl mr-3 text-end">
        {service.title}
      </h2>
      <motion.div
        className="overflow-hidden flex justify-center w-0"
        variants={anim}
        animate={isActive ? "open" : "closed"}
      >
        <Image
          className=" w-32 lg:w-40 "
          width={500}
          height={500}
          alt={service.title}
          src={service.src}
        />
      </motion.div>
    </div>
  );
}
