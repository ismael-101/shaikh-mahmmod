"use client";

import { IoMdHeart } from "react-icons/io";
import useWindowWidth from "../Hooks/useWindowSize";
import { Quran } from "@/public/quran";
import { motion } from "framer-motion";
import { Paragraph, ScrollParagraphProps } from "../Animations/TextAnimation";

export default function Header() {
  const windowWidth = useWindowWidth();
  const { scrollYProgress, el } = Paragraph() as ScrollParagraphProps;

  return (
    <div className="w-full relative">
      <motion.div
        ref={el}
        style={{ opacity: scrollYProgress }}
        className="flex flex-col items-center justify-center pb-20 h-[100dvh] overflow-hidden w-[90%] m-auto"
      >
        <div className=" lg:flex lg:items-end flex-row-reverse mt-10 text-md lg:text-xl ">
          <h1>
            ﴾ ۖ...ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ
            عِبَادِنَا ﴿
          </h1>
          <span className="text-xs lg:text-base">[سورة فاطر:32]</span>
        </div>
        <div className="flex flex-col items-center justify-center my-5  lg:my-0 ">
          {windowWidth > 1024 ? (
            <div className="absolute top-48 pointer-events-none">
              <Quran
                className={"text-primary fill-current opacity-10"}
                size={700}
              />
            </div>
          ) : (
            <div className="pointer-events-none">
              <Quran
                className={"text-primary fill-current opacity-25"}
                size={150}
              />
            </div>
          )}
          <h1 className="text-center mx-10 mt-5 mb-4 lg:mb-7 lg:mx-0 lg:text-2xl">
            اخوكم الشيخ محمود خليل مدرس اللغة العربية والقران الكريم
          </h1>
          <audio controls className="py-3 w-[70%] lg:z-40 ">
            <source src="/001.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <div className="flex items-end">
            <button className="flex btn btn-sm btn-secondary mb-7 mt-2">
              <IoMdHeart className="w-5 h-6 mr-2 text-neutral-content" />
              <span>99</span>
            </button>
          </div>
          <button className="btn btn-primary btn-wide justify-self-end">
            المزيد
          </button>
        </div>
      </motion.div>
    </div>
  );
}
