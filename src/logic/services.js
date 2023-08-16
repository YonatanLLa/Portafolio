import { RiHtml5Line } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiSequelize, SiExpress, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

export const services = {
	front: [
		{
			icono: RiHtml5Line,
			title: "Html5",
		},
		{
			icono: IoLogoCss3,
			title: "Css3",
		},
		{
			icono: FaReact,
			title: "React",
		},
		{
			icono: SiTailwindcss,
			title: "Tailwind",
		},
		{
			icono: IoLogoJavascript,
			title: "JavaScript",
		},
	],
	back: [
		{
			icono: FaNodeJs,
			title: "NodeJs",
		},
		{
			icono: SiExpress,
			title: "Express",
		},
		{
			icono: DiPostgresql,
			title: "Postgresql",
		},
		{
			icono: SiSequelize,
			title: "Sequelize",
		},
	],
};
