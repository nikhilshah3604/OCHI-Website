import { motion, useAnimation } from "framer-motion";
import React from "react";

const Features = () => {
  const cardAnimations = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cardAnimations[index].start({ y: "0%" });
  };

  const handleHoverEnd = (index) => {
    cardAnimations[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      {/* Section Title */}
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="tracking-tight text-8xl font-neueMontreal">
          Featured Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="px-20">
        <div className="flex w-full gap-10 mt-10 cards">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[75vh] relative "
          >
            <h1 className="absolute text-[#FF69B4] z-[9] text-9xl font-foundersGrotesk leading-none -translate-x-1/2 -translate-y-1/2 top-1/2 overflow-hidden flex -right-44">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cardAnimations[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full overflow-hidden card rounded-xl"
            >
              <img
                className="object-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Project FYDE"
              />
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute text-[#FF69B4] z-[9] text-9xl font-foundersGrotesk leading-none -left-12 -translate-x-1/2 -translate-y-1/2 top-1/2 overflow-hidden flex">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cardAnimations[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full overflow-hidden card rounded-xl"
            >
              <img
                className="object-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="Project VISE"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
