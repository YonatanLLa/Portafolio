import React, { useState } from "react";
// import { FiGithub } from "react-icons/fi";
// import { BiLink } from "react-icons/bi";
// import { datos } from "../logic/datos";
import Filter from "./Filter";
import WorkGrid from "./WorkGrid";
import WorkColumn from "./WorkColumn";
const Work = () => {
  const [displayMode, setDisplayMode] = useState("");

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
            <div className="flex justify-between items-center px-8 ">
              <section className="md:hidden sm:hidden">
                <Filter />
              </section>
              {/* button */}
              <section>
                <div className=" mt-3 flex gap-8">
                  
                  <button
                    className="btn"
                    onClick={() => setDisplayMode("grid")}
                  >
                    fila
                  </button>
                  <button
                    className="btn"
                    onClick={() => setDisplayMode("column")}
                  >
                    column
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
