import React from "react";
import { services } from "../logic/services";

const Services = () => {
	return (
		<div className="section " id="services">
			<div className=" container mx-auto">
				<div className="h-full w-full flex flex-col justify-center items-center gap-7 mt-24">
					<div className="flex flex-col">
						<h1 className="h2 text-center text-3xl text-gradient mb-8 lg:text-4xl">
							FrontEnd
						</h1>
						<div className="flex flex-wrap justify-center">
							{services.front.map((service, index) => {
								const IconComponent = service.icono; // Extract the icon component from the service object
								return (
									<div
										key={index}
										className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 m-3 flex justify-center flex-col items-center lg:w-[10rem] w-[6rem]">
										<IconComponent className="lg:text-[8rem] text-[2rem]" />{" "}
										{/* Render the icon component */}
										<h3 className="text-center">{service.title}</h3>
									</div>
								);
							})}
						</div>
					</div>
					{/* back */}
					<div className="flex flex-col">
						<h1 className="h2 text-center mb-8 text-gradient lg:text-4xl">
							BackEnd
						</h1>

						<div className="flex flex-wrap justify-center">
							{services.back.map((service, index) => {
								const IconComponent = service.icono; // Extract the icon component from the service object
								return (
									<div
										key={index}
										className="bg-stone-900/30 border-2 border-violet-500 rounded-lg p-2 m-3 flex justify-center flex-col items-center lg:w-[10rem] w-[6rem]">
										<IconComponent className="lg:text-[8rem] text-[2rem]" />{" "}
										{/* Render the icon component */}
										<h3 className="text-center">{service.title}</h3>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				{/* front */}
			</div>
		</div>
	);
};

export default Services;
