import React from "react";
import Foto from "../assets/fondoFinal.png";

const Banner = () => {
	return (
		<section
			id="banner"
			className="section flex items-center justify-center  lg:py-0 overflow-hidden h-screen "
		>
			<div className="container lg:ml-[5.5rem]  lg:mr-[5.5rem] mx-auto lg:border lg:bg-zinc-900/30 rounded-[1rem] ">
				<div className="flex items-center h-full pt-8 pb-10 gap-2">
					<div className="flex-1 flex-col items-center  p-4 lg:items-start  w-full h-full">
						<p className="text-[2rem] text-gradient mb-[22px]">
							Hola! Soy Yonatan
						</p>
						<h1
							className="text-4xl mb-[22px] leading-[44px] md:text-5xl
              md:leading-light lg:text-7xl
              lg:leading-[1.2] font-bold md:tracking-[-4px]"
						>
							Full Stack <br /> <span>Web Developer</span>
						</h1>
						<p>Desarrollo de aplicaciones eficientes y escalables.</p>
						<button className="btn mt-10 p-3">Trabaja conmigo</button>
					</div>
					<div className="hidden  lg:flex flex-1 lg:flex-row-reverse rotate-[0deg] h-full scale-x-[-1]">
						<img src={Foto} alt="" />
						{/* <img src="" alt="" /> */}
					</div>
				</div>
			</div>
			{/* <img src={Logo} alt="" /> */}
		</section>
	);
};

export default Banner;
