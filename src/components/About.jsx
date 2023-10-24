import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion} from "framer-motion";

const About = () => {

	const [isInView, setIsView]  = useState(false)
	const [hasAnimated, setHasAnimated] = useState(false);
	const handleScroll = () =>{
		if (!hasAnimated) {
			const element = document.getElementById("view")
			if (element) {
				const elementTop = element.getBoundingClientRect().top
				const elementBottom = element.getBoundingClientRect().bottom
				const windowBottom = window.innerHeight
				if (elementTop < windowBottom && elementBottom > 0) {
					setIsView(true)
				}else {
					setIsView(false);
				}
			}
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  }, []);
	  useEffect(() => {
		if (isInView && !hasAnimated) {
		  setHasAnimated(true);
		}
	  }, [isInView, hasAnimated]); 

	return (
		<section className="section " id="about">
			<motion.div 
				initial={{ scale: 1 }} // Tamaño inicial más pequeño
				animate={{ scale: hasAnimated ? 1 : 0.2 }}
				transition={{ duration: 2 }} // Duración de la animación
				id="view"
				className="container  lg:ml-[5.5rem]  lg:mr-[5.5rem] mx-auto   rounded-[1rem]  lg:bg-zinc-900/30">
				<div className="flex lg:flex-row h-full items-center flex-col ">
					{/* img */}
					<div className="flex-auto lg:bg-about bg-contain bg-no-repeat   lg:h-[440px]  mix-blend-lighten filter brightness-50 bg-top mr-4 lg:mr-0"></div>
					{/* text */}
					<div className="flex-1 lg:mt-12">
						<h2 className="h2 text-gradient text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block z-40">
							Yonatan Ll.A.
						</h2>
						<h3 className=" text-purple-400 ">I'm A Developer Full-Stack</h3>
						<p className="mt-16">
							Soy Desarrollador de Software Full Stack con experiencia en la
							creación de aplicaciones web eficientes y escalables,
							desarrolladas en el stack PERN. Trabajo con React, Redux,
							PostgreSQL, Express, Node js, HTML, CSS, Express, JavaScript y
							Sequelize.
							<br />
						</p>
							<Link to="contact" >
						<button className="btn mt-10 p-3 ">
								Trabaja conmigo
						</button>
							</Link>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
