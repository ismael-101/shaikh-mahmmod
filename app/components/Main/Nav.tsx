import { motion } from "framer-motion";
import { perspective, slideIn } from "../Animations/NavAnimation";
import Link from "next/link";
import ThemeSwitcher from "../Animations/ThemeSwitcher";

const links = [
  { title: "البدء", href: "/" },
  { title: "عني", href: "#about" },
  { title: "خدماتي", href: "#services" },
  { title: "تواصل معي", href: "#contact" },
  { title: "الهامشة", href: "#footer" },
];

const footerLinks = [
  {
    title: "Facebook",
    href: "google.com",
  },
  {
    title: "LinkedIn",
    href: "/",
  },
  {
    title: "Instagram",
    href: "/",
  },
  {
    title: "Twitter",
    href: "/",
  },
];
export function Nav({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: any;
}) {
  const MotionLink = motion(Link);
  return (
    <div className="h-full pt-[100px] px-[40px] pb-[50px] box-border flex flex-col justify-between ">
      <div className="flex gap-6 flex-col">
        {links.map((link, i) => {
          const { title, href } = link;

          return (
            <div
              key={`b_${i}`}
              className="text-primary-content text-3xl lg:text-5xl "
            >
              <motion.div
                style={{ perspective: "120px", perspectiveOrigin: "bottom" }}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  href={href}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsActive(!isActive);
                  }}
                >
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
        <motion.div className="flex flex-wrap text-md mt-20 ">
          {footerLinks.map((link, i) => {
            const { title, href } = link;

            return (
              <MotionLink
                href={href}
                className="w-1/2 mt-2 cursor-pointer"
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
              >
                {title}
              </MotionLink>
            );
          })}
          <div className="absolute bottom-16 -left-12">
            <ThemeSwitcher />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
