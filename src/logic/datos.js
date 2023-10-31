import project1 from "../assets/pokemon.png";
import project2 from "../assets/book.png";
import project3 from "../assets/portfolio.png";

export const datos = [
	{
		title: "Pokemons",
		tipe: "Individual",
		description:
			"El objetivo es una SPA con todos los conocimientos aprendidos en el Bootcamp de Henry. Esta SPA consume informacion de una API externa, para hacer funcionalidades como buscar pokemons, paginado, detalle de cada juego, filtros combinados con ordenamiento, y tambien tener la posibilidad de añadir un juego a la lista. NO APTO PARA MOBILE",
		links: {
			github: "https://github.com/YonatanLLa/Pokemons-FullStack",
			demo: "https://pokemons-full-stack.vercel.app/",
		},
		image: project1,
	},
	{
		title: "BookHub",
		tipe: "Grupal",
		description:
			"BookHub es la plataforma definitiva para los amantes de la lectura. Nuestra extensa colección de libros de diversos géneros te permitirá descubrir nuevos títulos y autores que se adapten a tus intereses y preferencias. Únete a nuestra comunidad de lectores apasionados para compartir tus reseñas y descubrimientos literarios. ¡Embárcate en un emocionante viaje de conocimiento y entretenimiento con BookHub!. NO APTO PARA MOBILE",
		links: {
			github: "https://github.com/YonatanLLa",
			demo: "https://mybookhub.vercel.app/",
		},
		image: project2,
	},
	{
		title: "Portafolio",
		tipe: "Full Stack",
		description:
			"Lo que estas viendo es mi portafolio. Aqui encontraras todos los proyectos que he realizado.",
		links: {
			github: "https://github.com/YonatanLLa",
			demo: "https://portafolio-yonatan.vercel.app/",
		},
		image: project3,
	},
];
