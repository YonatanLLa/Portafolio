import React from "react";
import project from "../assets/pokemon.png";
import project2 from "../assets/book.png";
import project3 from "../assets/portfolio.png";
import { FiGithub } from "react-icons/fi";
import { BiLink } from "react-icons/bi";

const Work = () => {
	return (
		<section id="work" className="section h-full">
			<div className=" container mx-auto">
				<div className="flex flex-col mb-8 mt-12">
					<h1 className="h2 text-gradient text-3xl lg:text-4xl font-medium lg:font-extrabold mb-10 before:content-portfolio relative before:absolute before::opacity-40 before:-top-[2rem] before:left-64 let before:hidden before:lg:block z-40 text-center">
						Mis ultimos trabajos
					</h1>
					{/* project 1 */}
					<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
						{/* text */}
						<div className="flex flex-col w-full justify-center item-center gap-4">
							<div>
								<div className="flex mb-8 flex-col justify-center items-center w-full h-full">
									<h2 className="h3 mb-1">Pokemons</h2>
									<h3 className="mb-1 text-[1.5rem] text-purple-500">
										Individual
									</h3>
									<p className="text-[15px]">
										El objetivo es una SPA con todos los conocimientos
										aprendidos en el Bootcamp de Henry. Esta SPA consume
										informacion de una API externa, para hacer funcionalidades
										como buscar pokemons, paginado, detalle de cada juego,
										filtros combinados con ordenamiento, y tambien tener la
										posibilidad de añadir un juego a la lista. NO APTO PARA
										MOBILE
									</p>
								</div>
								{/* Direction */}
								<div className="flex justify-center gap-4">
									<a
										href="https://github.com/YonatanLLa/Pokemons-FullStack"
										target="_black"
										className=" border rounded-lg  hover:bg-white/50">
										<FiGithub className="text-[3rem] p-3" />
									</a>
									<a
										href="https://pokemons-amber.vercel.app"
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
										src={project}
										alt=""
										rel="noreferrer"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 group-hover:backdrop-blur-md"></div>
								<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
									<h1 className="font-dmserif text-3xl font-bold text-white">
										<a
											href="https://pokemons-yonatan.vercel.app"
											target="_blank"
											className=" hover:via-violet-700">
											Ver Demo
										</a>{" "}
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				{/* "project"2 */}

				<div className="flex flex-col mt-8 mb-8">
					{/* project  */}
					<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
						{/* text */}
						<div className="flex flex-col w-full justify-center item-center gap-4">
							<div>
								<div className="flex mb-8 flex-col justify-center items-center w-full h-full">
									<h2 className="h3 mb-1">BookHub</h2>
									<h3 className="mb-1 text-[1.5rem] text-purple-500">Grupal</h3>
									<p className="text-[15px]">
										BookHub es la plataforma definitiva para los amantes de la
										lectura. Nuestra extensa colección de libros de diversos
										géneros te permitirá descubrir nuevos títulos y autores que
										se adapten a tus intereses y preferencias. Únete a nuestra
										comunidad de lectores apasionados para compartir tus reseñas
										y descubrimientos literarios. ¡Embárcate en un emocionante
										viaje de conocimiento y entretenimiento con BookHub!. NO
										APTO PARA MOBILE
									</p>
								</div>
								{/* Direction */}
								<div className="flex justify-center gap-4">
									<a
										href="https://github.com/YonatanLLa/bookhub_back"
										target="_black"
										className=" border rounded-lg  hover:bg-white/50">
										<FiGithub className="text-[3rem] p-3" />
									</a>
									<a
										href="https://mybookhub.vercel.app/"
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
										src={project2}
										alt=""
										rel="noreferrer"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 group-hover:backdrop-blur-md"></div>
								<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
									<h1 className="font-dmserif text-3xl font-bold text-white">
										Ver Demo
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				{/* "project 3" */}

				<div className="flex flex-col mt-8 mb-8">
					{/* project  */}
					<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
						{/* text */}
						<div className="flex flex-col w-full justify-center item-center gap-4">
							<div>
								<div className="flex mb-8 flex-col justify-center items-center w-full h-full">
									<h2 className="h3 mb-1">Portfolio</h2>
									<h3 className="mb-1 text-[1.5rem] text-purple-500">Grupal</h3>
									<p className="text-[15px]">
										Lo que estas viendo es mi portafolio. Aqui encontraras todos
										los proyectos que he realizado.
									</p>
								</div>
								{/* Direction */}
								<div className="flex justify-center gap-4">
									<a
										href="https://github.com/YonatanLLa/Portafolio"
										target="_black"
										className=" border rounded-lg  hover:bg-white/50">
										<FiGithub className="text-[3rem] p-3" />
									</a>
									<a href="#" className=" border rounded-lg hover:bg-white/50">
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
										src={project3}
										alt=""
										rel="noreferrer"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 group-hover:backdrop-blur-md"></div>
								<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
									<h1 className="font-dmserif text-3xl font-bold text-white">
										Ver Demo
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
			</div>
		</section>
	);
};

export default Work;
