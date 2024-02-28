import { motion } from "framer-motion";
import { perspective, slideIn } from "../Animations/NavAnimation";

const links = [
  { title: "home", href: "/" },
  { title: "skills", href: "/skills" },
  { title: "services", href: "/services" },
  { title: "contact", href: "/contact" },
  { title: "footer", href: "/footer" },
];

const footerLinks = [
  {
    title: "Facebook",
    href: "/",
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
export function Nav() {
  return (
    <div className="h-full pt-[100px] px-[40px] pb-[50px] box-border flex flex-col justify-between ">
      <div className="flex gap-4 flex-col">
        {links.map((link, i) => {
          const { title, href } = link;

          return (
            <div key={`b_${i}`} className="text-primary-content text-5xl ">
              <motion.div
                style={{ perspective: "120px", perspectiveOrigin: "bottom" }}
                link={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a className="cursor-pointer">{title}</a>
              </motion.div>
            </div>
          );
        })}
        <motion.div className="flex flex-wrap text-md mt-20 ">
          {footerLinks.map((link, i) => {
            const { title, href } = link;

            return (
              <motion.a
                className="w-1/2 mt-2 cursor-pointer"
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
              >
                {title}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
