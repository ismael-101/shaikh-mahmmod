import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <span className="fixed top-5 left-3 text-xs cursor-pointer">
        الشيخ محمود
      </span>
      <BsThreeDotsVertical className="fixed top-6 right-7" />
      <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden w-full lg: ">
        <div className="items-start mt-10 text-md ">
          <h1>
            ﴾ ۖ...ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ
            عِبَادِنَا ﴿
          </h1>
          <span className="text-xs">[سورة فاطر:32]</span>
        </div>
        <div className="flex flex-col items-center justify-center h-full mb-10">
          <Image
            src="/book.svg"
            width={500}
            height={500}
            alt="bg pattern"
            className="w-20"
          />
          <h1 className="text-center mx-10 mt-5 mb-10 ">
            اخوكم الشيخ محمود خليل مدرس اللغة العربية والقران الكريم
          </h1>
          <audio controls className="">
            <source src="/001.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <button className="flex px-3 py-1 mt-5 bg-gray-100 rounded-md">
            <IoMdHeart className="w-5 h-6 mr-2 text-red-600" />
            <span>99</span>
          </button>
        </div>
      </div>
    </>
  );
}
