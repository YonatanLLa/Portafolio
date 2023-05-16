import {React, useState} from "react";
import { Link } from "react-scroll";

import { FaHome } from "react-icons/fa";

import { RiUser3Fill } from "react-icons/ri";

import {
	BsFillClipboardDataFill,
	BsBriefcaseFill,
	BsFillChatSquareDotsFill,
} from "react-icons/bs";

const Nav = () => {
	const [smooth, setSmooth]  = useState(false)
	return (
		<div className="flex">
			<div className={`hover:bg-white/20 rounded-[.5rem]`}>
				<Link
					to="banner"
					activeClass="active"
					smooth={smooth}
					spy={true}
					// offset={-200}
					className=" cursor-pointer pl-5 pr-5 flex flex-col items-center "
				>
					<FaHome className="fill-stone-100  w-[1.8rem] h-[2rem] focus:fill-stone-600" />
					<span className=" leading-none text-[12px]">home</span>
				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="about"
					activeClass="active"
					// offset={-200}
					smooth={true}
					spy={true}
				>
					<RiUser3Fill className=" fill-stone-100  w-[1.8rem] h-[2rem] " />
					<span className=" leading-none text-[12px]">about</span>

				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="services"
					activeClass="active"
					smooth={true}
					// offset={200}
					spy={true}
				>
					<BsFillClipboardDataFill className=" fill-stone-100  w-[1.8rem] h-[2rem]" />
					<span className=" leading-none text-[12px]">skills</span>

				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="work"
					activeClass="active"
					smooth={true}
					// offset={200}
					spy={true}
				>
					<BsBriefcaseFill className=" fill-stone-100  w-[1.8rem] h-[2rem]" />
					<span className=" leading-none text-[12px]">work</span>

				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="contact"
					activeClass="active"
					smooth={true}
					// offset={200}
					spy={true}
				>
					<BsFillChatSquareDotsFill className=" fill-stone-100 w-[1.8rem] h-[2rem]" />
					<span className=" leading-none text-[12px]">home</span>

				</Link>
			</div>
		</div>
	);
};

export default Nav;
