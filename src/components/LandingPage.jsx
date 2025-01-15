import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  motion
  return (
    <div  data-scroll data-scroll-speed="-.3"  data-scroll-section  className="w-full h-screen pt-2 bg-zinc-900">
      <div className="px-20 mt-[7.7rem] textstructure">
        {[" We create", "Eye - opening", "presentations"].map((item, index) => (
          <div className=" masker" key={index}>
            <div className="flex overflow-hidden w-fit">
            {index === 1 && <motion.div initial = {{width:0}}  animate={{width:"9vw"}} transition={{ ease :[0.76,0,0.24,1], duration:1}} className="w-[8vw] h-[5vw] bg-red-500 relative top-3  rounded-md" ></motion.div>}
              <h1 className="leading-[6vw] uppercase text-[8vw] font-foundersGrotesk ">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          " From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="font-light leading-none tracking-tight text-md text-[1.5vw]">
              {item}
            </p>
          );
        })}
        <div className="flex items-center gap-5 start">
          <div className="px-5 py-2 rounded-full border-zinc-500 border-[2px] font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-zinc-500 border-[2px] items-center flex justify-center">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
