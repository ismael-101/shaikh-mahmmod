"use client";

import { IoMdHeart } from "react-icons/io";
import Image from "next/image";
import useWindowWidth from "./Hooks/useWindowSize";
import { Quran } from "@/public/quran";
import { cn } from "@/lib/utils";

export default function Header() {
  const windowWidth = useWindowWidth();

  return (
    <div className="w-full relative">
      <div className="flex flex-col items-center justify-center lg:items-end h-[90dvh] lg:pb-28 overflow-hidden lg:w-[70%] m-auto lg:flex-wrap ">
        {windowWidth < 1024 && (
          <div className="items-start mt-10 text-md ">
            <h1>
              ﴾ ۖ...ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ
              عِبَادِنَا ﴿
            </h1>
            <span className="text-xs">[سورة فاطر:32]</span>
          </div>
        )}
        {windowWidth > 1024 && (
          <div
            className={cn(
              "z-40 absolute top-0 ",
              windowWidth < 1510 ? "left-0 " : "left-24"
            )}
          >
            <Image
              priority={true}
              src="/quran.jpg"
              width={500}
              height={500}
              alt="Quran"
              className="object-none rounded-r-full xl:rounded-full md:w-[23rem] xl:w-[35rem] lg:h-[60rem] shadow--xl  "
            />
          </div>
        )}
        <div className="flex flex-col items-center justify-center h-full mb-10 lg:items-end">
          {windowWidth < 1024 && (
            <Quran
              className={"text-primary fill-current opacity-40"}
              size={100}
            />
          )}

          {windowWidth > 1024 && (
            <div className="items-end mt-10 text-xl flex z-40">
              <span className="text-lg mx-2">[سورة فاطر:32]</span>
              <h1>
                ﴾ ۖ...ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ
                عِبَادِنَا ﴿
              </h1>
            </div>
          )}
          <h1 className="text-center mx-10 mt-5 mb-4 lg:mb-7 lg:mx-0 lg:mt-2 lg:z-40 lg:text-2xl">
            اخوكم الشيخ محمود خليل مدرس اللغة العربية والقران الكريم
          </h1>
          <audio controls className="py-3 w-[80%] lg:z-40 ">
            <source src="/001.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <div className="flex items-end">
            <button className="flex btn btn-sm btn-secondary mb-10 lg:mb-0 mt-2 lg:z-40">
              <IoMdHeart className="w-5 h-6 mr-2 text-neutral-content" />
              <span>99</span>
            </button>
            <Quran
              className={"text-primary fill-current max-lg:hidden opacity-40"}
              size={70}
            />
          </div>

          <button className="btn btn-primary btn-wide lg:z-40 lg:mt-14 justify-self-end">
            المزيد
          </button>
        </div>
      </div>
    </div>
  );
}
