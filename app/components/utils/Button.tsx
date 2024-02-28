import { motion } from "framer-motion";

export default function Button({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden ">
      <motion.div
        className="relative w-full h-full bg-primary uppercase "
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full "
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="w-full h-full bg-secondary text-secondary-content "
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center hover:[transform:rotateX(90deg)]  transition-transform duration-300 ease-custom1 [transform-style:preserve-3d] ">
      <p className=" hover:-translate-y-full pointer-events-none transition-all  duration-300 ease-custom1 hover:text-opacity-0">
        {label}
      </p>
      <p className="absolute top-full [transform:rotateX(-90deg)] translate-y-[9px] duration-300 transition-all  ease-custom1 text-opacity-0 hover:text-opacity-100 [transform-origin:bottom\center]">
        {label}
      </p>
    </div>
  );
}
