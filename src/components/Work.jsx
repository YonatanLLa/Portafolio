import React from "react";
import { FiGithub } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { datos } from "../logic/datos";

const Work = () => {
	return (
		<section id="work" className="section h-full">
			<div className=" container mx-auto">
				<div className="flex flex-col mb-8 mt-12">
					<h1 className="h2 text-gradient text-3xl lg:text-4xl font-medium lg:font-extrabold mb-10 before:content-portfolio relative before:absolute before::opacity-40 before:-top-[2rem] before:left-64 let before:hidden before:lg:block z-40 text-center">
						Mis ultimos trabajos
					</h1>
					{/* project 1 */}
					{
						datos.length > 0 && datos.map((dato, index) => {
							return (
								<>
									<div key={index} className="m-4">
										<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
											{/* text */}
											<div className="flex flex-col w-full justify-center item-center gap-4">
												<div>
													<div className="flex mb-8 flex-col justify-center items-center w-full h-full">
														<h2 className="h3 mb-1">{dato.title}</h2>
														<h3 className="mb-1 text-[1.5rem] text-purple-500">
															{dato.tipe}
														</h3>
														<p className="text-[15px]">{dato.description}</p>
													</div>
													{/* Direction */}
													<div className="flex justify-center gap-4">
														<a
															href={dato.links.github}
															target="_black"
															className=" border rounded-lg  hover:bg-white/50">
															<FiGithub className="text-[3rem] p-3" />
														</a>
														<a
															href={dato.links.demo}
															target="_blank"
															className=" border rounded-lg hover:bg-white/50">
															<BiLink className="text-[3rem] p-3" />
														</a>
													</div>
												</div>
											</div>
											{/* img */}
											<div className=" border-y-[1rem] border-x-2 rounded-[1rem]">
												{/* Direction */}
												<div className="group relative z-20 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
													<div>
														<img
															className="h-full w-[60rem] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
															src={dato.image}
															alt=""
															rel="noreferrer"
														/>
													</div>
													<a
														href={dato.links.demo  }
														target="_blank"
														className=" hover:via-violet-700">
														<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 group-hover:backdrop-blur-md"></div>
														<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
															<h1 className="font-dmserif text-3xl font-bold text-white">
																<a>Ver Demo</a>{" "}
															</h1>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<hr />
								</>
							);
						})

					}
					
				</div>
				
				
			</div>
		</section>
	);
};

export default Work;
