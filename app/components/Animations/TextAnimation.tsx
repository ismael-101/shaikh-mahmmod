import { useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export interface ScrollParagraphProps {
  hello: MotionValue<number>;
  el: React.MutableRefObject<HTMLDivElement | null>;
}

export function Paragraph(): ScrollParagraphProps {
  const el = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress : hello } = useScroll({
    target: el,
    offset: ["1 0.6", "1 end"],
  });
  return { hello, el };
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

