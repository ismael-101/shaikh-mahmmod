import { motion } from "framer-motion";

export default function Inner({ children }: { children: React.ReactNode }) {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 1 },
  };
  const slide = {
    initial: { bottom: 0 },
    enter: { bottom: "100vh" },
    exit: {
      top: 0,
      transition: {
        duration: 3,
        ease: [0.76, 0, 0.24, 1],
      
      },
    },
  };
  return (
    <div className="">
      <motion.div
        {...anim(slide)}
        className="fixed bottom-0 left-0 bg-red-500 w-[100vw] h-[100vh] "
      />
      <motion.div {...anim(opacity)} className="">
        {children}
      </motion.div>
    </div>
  );
}
