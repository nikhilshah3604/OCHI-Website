import React from "react";
import { motion } from "motion/react";

const Marque = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".1"  className="w-full py-10 text-white bg-green-600 rounded-tl-3xl rounded-tr-3xl">
      <div className="flex  overflow-hidden border-t-2 border-b-2 text border-zinc-300 whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-white text-[16vw] leading-none font-foundersGrotesk font-semibold uppercase pt-10 -mt-10 pr-20">
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-white text-[16vw] leading-none font-foundersGrotesk font-semibold uppercase pt-10 -mt-10 pr-20">
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-white text-[16vw] leading-none font-foundersGrotesk font-semibold uppercase pt-10 -mt-10 pr-20">
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
