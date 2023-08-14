import { React, useState } from "react";
import { Link } from "react-scroll";

import { FaHome } from "react-icons/fa";

import { RiUser3Fill } from "react-icons/ri";

import {
	BsFillClipboardDataFill,
	BsBriefcaseFill,
	BsFillChatSquareDotsFill,
} from "react-icons/bs";

const NavMobile = () => {
	return (
		<nav className="section fixed bottom-4 w-screen overflow-hidden z-50">
			<div className="container mx-auto ">
				{/* div nav inner */}
				<div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-center items-center text-2xl text-white/50 gap-4">
					<Link 
            className=" cursor-pointer  w-[60px] h-[60px] flex items-center justify-center"
						to="banner"
						activeClass="active"
						smooth={true}
						// offset={200}
						spy={true}
					>
						<FaHome />
					</Link>

					<Link 
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
						to="about"
						activeClass="active"
						smooth={true}
						// offset={200}
						spy={true}
					>
						<RiUser3Fill />
					</Link>

					<Link 
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
						to="services"
						activeClass="active"
						smooth={true}
						// offset={200}
						spy={true}
					>
						<BsFillClipboardDataFill />
					</Link>

					<Link 
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
						to="work"
						activeClass="active"
						smooth={true}
						// offset={200}
						spy={true}
					>
						<BsBriefcaseFill />
					</Link>

					<Link 
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
						to="contact"
						activeClass="active"
						smooth={true}
						// offset={200}
						spy={true}
					>
						<BsFillChatSquareDotsFill />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavMobile;
