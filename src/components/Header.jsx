import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import logoImg from "../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
	const [bg, setBg] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			return window.scrollY > 50 ? setBg(true) : setBg(false);
		});
	});
	return (
		<header
			id="home"
			className={`${
				bg ? "backdrop-blur-md border-b" : " p-2"
			} p-2 flex items-center w-full fixed overflow-hidden z-50 top-0  text-white transition-all duration-300`}>
			<div className="container z-10 mx-auto h-full  flex items-center justify-between w-full">
				<Link to="banner" className="hover:cursor-pointer">
					<div>
						<img className="w-28" src={logoImg} alt="" />
					</div>
				</Link>
				{/* nav */}
				<div className="lg:block hidden">
					<Nav />
				</div>

				{/* Redes sociales */}
				<div className="lg:block backdrop-blur-sm">
					<Socials />
				</div>

				{/* NavMobile */}
			</div>
		</header>
	);
};

export default Header;
