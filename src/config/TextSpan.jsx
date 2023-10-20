import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: {
        times: [0, .4, .6, .7, .8, .9],
        duration: .7
      }
    });
    setIsPlaying(true)
  };

  return (
    <motion.span
      className=" inline-block lg:text-7xl  pr-[.3rem]  hover:text-violet-500"
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={()=> setIsPlaying(false)}
    >
      {
          children
      }
    </motion.span>
  );
};

export default TextSpan;
