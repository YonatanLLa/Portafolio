import React from "react";

import { datos } from "../logic/datos";

const WorkGrid = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
      {datos.length > 0 &&
        datos.map((dato, index) => {
          return (
            <div key={index}>
              <div className="m-4">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                  {/* text */}

                  {/* img */}
                  <div className="border rounded-b-2xl   bg-zinc-900/30 shadow-2xl shadow-zinc-900 ">
                    {/* Direction */}
                    <div className="group relative z-20 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div>
                        <img
                          className="h-full rounded-lg w-[40rem] object-cover"
                          src={dato.image}
                          alt=""
                          rel="noreferrer"
                        />
                      </div>
                      <a
                        href={dato.links.demo}
                        target="_blank"
                        className=" hover:via-violet-700"
                      >
                        <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 group-hover:backdrop-blur-md"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                          <h1 className="font-dmserif text-2xl font-semibold text-blue-500">
                            <a>Ver Demo</a>{" "}
                          </h1>
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col w-full justify-center item-center gap-4">
                      <div>
                        <div className="flex  flex-col justify-center items-center w-full h-full">
                          <h2 className="h3 mb-1">{dato.title}</h2>
                          <h3 className="mb-1 text-[1.5rem] text-purple-500">
                            {dato.tipe}
                          </h3>
                        </div>
                        {/* <div className="flex justify-center gap-4 mb-4">
                              <a
                                href={dato.links.github}
                                target="_black"
                                className=" border rounded-lg  hover:bg-white/50"
                              >
                                <FiGithub className="text-[3rem] p-3" />
                              </a>
                              <a
                                href={dato.links.demo}
                                target="_blank"
                                className=" border rounded-lg hover:bg-white/50"
                              >
                                <BiLink className="text-[3rem] p-3" />
                              </a>
                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WorkGrid;
