"use client";

import Button from "../utils/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Nav } from "../Main/Nav";
import useWindowWidth from "../Hooks/useWindowSize";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  const useWindow = useWindowWidth();

  const menu = {
    open: {
      width: `${useWindow < 1024 ? "260px" : "480px"}`,
      height: "650px",
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      width: `${useWindow < 1024 ? "80px" : "100px"}`,
      height: `${useWindow < 1024 ? "30px" : "40px"}`,
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <div className="fixed top-[25px] right-[25px] lg:top-[50px] lg:right-[50px] z-50">
      <motion.div
        className="w-[480px] h-[650px] bg-primary rounded-[25px] relative"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav isActive={isActive} setIsActive={setIsActive}  />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
