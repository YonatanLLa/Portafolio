import React, { useState } from "react";
// import { FiGithub } from "react-icons/fi";
// import { BiLink } from "react-icons/bi";
// import { datos } from "../logic/datos";
import Filter from "./Filter";
import WorkGrid from "./WorkGrid";
import WorkColumn from "./WorkColumn";
const Work = () => {
  const [displayMode, setDisplayMode] = useState("grid");

  return (
    <section
      id="work"
      className="section lg:ml-[5.5rem]  lg:mr-[5.5rem] h-full flex flex-col"
    >
      <div className=" container lg:py-8   mx-auto   rounded-[1rem]  lg:bg-zinc-900/30">
        <div className="flex flex-col  mt-12  ">
          <h1 className="h2 text-gradient text-3xl lg:text-4xl font-medium lg:font-extrabold mb-10 before:content-portfolio relative before:absolute before::opacity-40 before:-top-[2rem] before:left-64 let before:hidden before:lg:block z-40 text-center">
            Mis ultimos trabajos
          </h1>
          <section className=" lg:py-8     ">
            <div className="flex justify-between items-center px-6">
              {/* <section className="md:hidden sm:hidden">
                <Filter />
              </section> */}
              {/* button */}
              <section className="md:flex md:justify-end md:items-end md:w-full hidden">
                <div className=" mt-3 flex gap-4 w-24">
                  <button
                    className={`${
                      displayMode === "grid" ? "modo-grid-column" : ""
                    } rounded-[.5rem] p-1 font-primary text-white font-medium`}
                    onClick={() => setDisplayMode("grid")}
                  >
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className={` ${
                      displayMode === "column" ? "modo-grid-column" : ""
                    } rounded-[.5rem] p-1 font-primary text-white font-medium`}
                    onClick={() => setDisplayMode("column")}
                  >
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </section>
            </div>
            {/* rederizar projects*/}
            <section>
              {/* <WorkGrid /> */}
              {displayMode === "column" ? <WorkColumn /> : <WorkGrid />}
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Work;
