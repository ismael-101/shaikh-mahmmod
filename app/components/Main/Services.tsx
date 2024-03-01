"use client";
import { services } from "../utils/services";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  close: { width: 0 },
};

export default function Services() {
  return (
    //main div
    <div className=" h-screen flex items-center justify-center">
      {/* gallery div */}
      <div className="w-[70%]">
        <h1>Services</h1>
        {services.map((service, index) => {
          return <Service service={service} key={index} />;
        })}
      </div>
    </div>
  );
}

function Service({ service }: { service: any }) {
  const [isActive, setIsActive] = useState(false);

  return (
    // service div
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className="rounded-t-sm border-b-2 pt-[0.8vw] pb-[0.8vw] cursor-pointer w-full  flex justify-center items-center"
    >
      <h2 className="text-[4vw] lg:text-[2vw] mr-3">{service.title}</h2>
      <motion.div
        className="overflow-hidden flex justify-center w-0"
        variants={anim}
        animate={isActive ? "open" : "closed"}
      >
        <Image
          className=" w-[25vw] lg:w-[10vw] "
          width={500}
          height={500}
          alt={service.title}
          src={service.src}
        />
      </motion.div>
    </div>
  );
}
