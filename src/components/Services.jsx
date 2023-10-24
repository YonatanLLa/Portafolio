import React, { useState, useEffect } from "react";
import { services } from "../logic/services";
import { motion } from "framer-motion";

const Services = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const [isFrontInView, setIsFrontInView] = useState(false);
  const [isBackInView, setIsBackInView] = useState(false);
  const [hasFrontAnimated, setHasFrontAnimated] = useState(false);
  const [hasBackAnimated, setHasBackAnimated] = useState(false);

  const handleScroll = () => {
    if (!hasFrontAnimated) {
      const frontElement = document.getElementById("front");
      if (frontElement) {
        const frontElementTop = frontElement.getBoundingClientRect().top;
        const frontElementBottom = frontElement.getBoundingClientRect().bottom;
        const windowBottom = window.innerHeight;

        if (frontElementTop < windowBottom && frontElementBottom > 0) {
          setIsFrontInView(true);
        } else {
          setIsFrontInView(false);
        }
      }
    }

    if (!hasBackAnimated) {
      const backElement = document.getElementById("back");
      if (backElement) {
        const backElementTop = backElement.getBoundingClientRect().top;
        const backElementBottom = backElement.getBoundingClientRect().bottom;
        const windowBottom = window.innerHeight;

        if (backElementTop < windowBottom && backElementBottom > 0) {
          setIsBackInView(true);
        } else {
          setIsBackInView(false);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFrontInView && !hasFrontAnimated) {
      setHasFrontAnimated(true);
    }
  }, [isFrontInView, hasFrontAnimated]);

  useEffect(() => {
    if (isBackInView && !hasBackAnimated) {
      setHasBackAnimated(true);
    }
  }, [isBackInView, hasBackAnimated]);

  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="h-full w-full flex flex-col justify-center items-center gap-7 mt-24">
          <div className="flex flex-col">
            <h1 className="h2 text-center text-3xl text-gradient mb-8 lg:text-4xl">
              FrontEnd
            </h1>
            <motion.ul
              className="flex flex-wrap justify-center"
              id="front"
              variants={container}
              initial="hidden"
              animate={hasFrontAnimated ? "visible" : "hidden"}
            >
              {services.front.map((service, index) => {
                const IconComponent = service.icono;
                return (
                  <motion.li
                    key={index}
                    variants={item}
                    className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 m-3 flex justify-center flex-col items-center lg:w-[10rem] w-[6rem]"
                  >
                    <IconComponent className="lg:text-[8rem] text-[2rem]" />
                    <h3 className="text-center">{service.title}</h3>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
          <div className="flex flex-col">
            <h1 className="h2 text-center mb-8 text-gradient lg:text-4xl">
              BackEnd
            </h1>

            <motion.ul
              variants={container}
              initial="hidden"
              className="flex flex-wrap justify-center"
              id="back"
              animate={hasBackAnimated ? "visible" : "hidden"}
            >
              {services.back.map((service, index) => {
                const IconComponent = service.icono;
                return (
                  <motion.li
                    key={index}
                    variants={item}
                    className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 m-3 flex justify-center flex-col items-center lg:w-[10rem] w-[6rem]"
                  >
                    <IconComponent className="lg:text-[8rem] text-[2rem]" />
                    <h3 className="text-center">{service.title}</h3>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;