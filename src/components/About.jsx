import React from "react";

const About = () => {
	
	return (
		<section className="section bg-stone-900/10" id="about">
			<div className="container mx-auto">
				<div className="flex lg:flex-row h-full items-center flex-col">
					{/* img */}
					<div className="flex-auto bg-about bg-contain bg-no-repeat h-[200px]  lg:h-[440px]  mix-blend-lighten filter brightness-50 bg-top mr-4 lg:mr-0"></div>
					{/* text */}
					<div className="flex-1 mt-12">
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
						<button className="btn mt-10 p-3 ">Trabaja conmigo</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
