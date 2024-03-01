import { useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export interface ScrollParagraphProps {
  scrollYProgress: MotionValue<number>;
  el: React.MutableRefObject<HTMLDivElement | null>;
}

export function Paragraph(): ScrollParagraphProps {
  const el = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["1 0.6", "1 end"],
  });
  return { scrollYProgress, el };
}
{
  // this one is to be add to the components so to use the animation
  /*  const { scrollYProgress, el } = Paragraph() as ScrollParagraphProps;

      <motion.div
        id="/about"
        className="text-3xl  flex flex-col justify-center text-right"
        ref={el}
        style={{ opacity: scrollYProgress }}
      >
    // here comes the paragraph 
    </motion.div>
  */
}

export function LineParagraph(): ScrollParagraphProps {
  const el = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["start end", "end end"],
  });
  return { scrollYProgress, el };
}
