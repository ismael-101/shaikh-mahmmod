"use client";
import { BsThreeDotsVertical } from "react-icons/bs";
import ThemeSwitcher from "./Animations/ThemeSwitcher";
import useWindowWidth from "./Hooks/useWindowSize";
import Image from "next/image";

export default function Nav() {
  const windowWidth = useWindowWidth();
  return (
    <div className="h-[10dvh]">
      <span className="fixed top-5 left-3 text-xs cursor-pointer">
        {/* <Image
            src="/book.svg"
            width={100}
            height={100}
            alt="logo"
            className="w-8 lg:hidden "
          /> */}
        الشيخ محمود
      </span>
      {windowWidth < 1024 && (
        <BsThreeDotsVertical className="fixed top-6 right-7" />
      )}
      <ThemeSwitcher />
    </div>
  );
}
