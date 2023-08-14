import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiTailwindcss, SiSequelize, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";

const Services = () => {
	return (
		<div className="section " id="services">
			<div className=" container mx-auto">
				<div className="h-full w-full flex flex-col justify-center items-center gap-7 mt-24">
					<div className="flex flex-col">
						<h1 className="h2 text-center text-3xl text-gradient mb-8 lg:text-4xl  ">
							FrontEnd
						</h1>
						<div className="flex">
							
							<div className=" bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<AiOutlineHtml5 className="lg:text-[8rem]" />
								<h3 className="text-center">Html5</h3>
							</div>
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<TbBrandCss3 className=" lg:text-[8rem]" />
								<h3 className="text-center">Css3</h3>
							</div>
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<FaReact className=" lg:text-[8rem]" />
								<h3 className="text-center">React</h3>
							</div>
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<SiTailwindcss className=" lg:text-[8rem]" />
								<h3 className="text-center">Tailwind</h3>
							</div>
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<IoLogoJavascript className=" lg:text-[8rem]" />
								<h3 className="text-center">JavaScript</h3>
							</div>
						</div>
					</div>
					{/* back */}
					<div className="flex flex-col">
						<h1 className="h2 text-center mb-8 text-gradient lg:text-4xl">
							BackEnd
						</h1>

						<div className="flex">
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<FaNodeJs className=" lg:text-[8rem]" />
								<h3 className="text-center">NodeJs</h3>
							</div>
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<SiExpress className=" lg:text-[8rem]" />
								<h3 className="text-center">Expess</h3>
							</div>
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<DiPostgresql className=" lg:text-[8rem]" />
								<h3 className="text-center">Postgresql</h3>
							</div>
							<div className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 mr-3">
								<SiSequelize className=" lg:text-[8rem]" />
								<h3 className="text-center">Sequelize</h3>
							</div>
						</div>
					</div>
				</div>
				{/* front */}
			</div>
		</div>
	);
};

export default Services;
