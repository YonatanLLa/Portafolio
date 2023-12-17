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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
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
      <div className="container mt-14  lg:ml-[5.5rem]  lg:mr-[5.5rem] mx-auto   rounded-[1rem]   ">
        <div class="grid grid-cols-2 grid-rows-2 gap-0 ">
          <div class="col-span-1 row-span-1 py-3 lg:bg-zinc-900/30 m-1 rounded-lg ">
            <h1 className="h2 text-center text-3xl text-gradient mb-8 lg:text-4xl">
              FrontEnd
            </h1>
            <motion.ul
              className="flex flex-wrap justify-center rounded-lg "
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
                    className="lg:bg-stone-900/30 rounded-lg p-1 m-2 flex  flex-col justify-center  items-center lg:w-[7rem] w-[5rem]"
                  >
                    <IconComponent className="lg:text-[8rem] text-[4rem]" />
                    {/* <img src={service.icono} alt="" /> */}
                    <h3 className="text-center">{service.title}</h3>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
          <div class="col-span-1 row-span-1 py-3 lg:bg-zinc-900/30 m-1 rounded-lg ">
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
                    className="lg:bg-stone-900/30 rounded-lg p-1 m-2 flex justify-center flex-col items-center lg:w-[7rem] w-[6rem]"
                  >
                    <IconComponent className="lg:text-[4rem] text-[4rem]" />
                    <h3 className="text-center">{service.title}</h3>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
          <div class="col-span-2 row-span-1 py-3 lg:bg-zinc-900/30 m-1 rounded-lg  ">
            <h1 className="h2 text-center mb-8 text-gradient lg:text-4xl">
              Base de Datos
            </h1>

            <motion.ul
              variants={container}
              initial="hidden"
              className="flex flex-wrap justify-center"
              id="back"
              animate={hasBackAnimated ? "visible" : "hidden"}
            >
              {services.bdd.map((service, index) => {
                const IconComponent = service.icono;
                return (
                  <motion.li
                    key={index}
                    variants={item}
                    className=" lg:bg-stone-900/30 rounded-lg p-1 m-2 flex justify-center flex-col items-center lg:w-[7rem] w-[5rem]"
                  >
                    <IconComponent className="lg:text-[3rem] text-[3rem]" />
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
