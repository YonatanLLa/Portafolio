import React from "react";
import { Link } from "react-scroll";

import { FaHome } from "react-icons/fa";

import { RiUser3Fill } from "react-icons/ri";

import {
	BsFillClipboardDataFill,
	BsBriefcaseFill,
	BsFillChatSquareDotsFill,
} from "react-icons/bs";

const Nav = () => {
	return (
		<div className="flex">
			<div className=" hover:bg-black/20">
				<Link
					to="banner"
					activeClass="active"
					smooth={true}
					spy={true}
					className=" cursor-pointer pl-5 pr-5 flex flex-col items-center"
				>
					<FaHome className="fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2rem] focus:fill-stone-900" />
					<span className=" leading-none text-[12px]">home</span>
				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="about"
					activeClass="active"
					smooth={true}
					spy={true}
				>
					<RiUser3Fill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2rem] " />
					<span className=" leading-none text-[12px]">home</span>

				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="services"
					activeClass="active"
					smooth={true}
					spy={true}
				>
					<BsFillClipboardDataFill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2rem]" />
					<span className=" leading-none text-[12px]">home</span>

				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="work"
					activeClass="active"
					smooth={true}
					spy={true}
				>
					<BsBriefcaseFill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2rem]" />
					<span className=" leading-none text-[12px]">home</span>

				</Link>
			</div>

			<div>
				<Link
					className=" cursor-pointer pl-5 pr-5  flex flex-col items-center"
					to="contact"
					activeClass="active"
					smooth={true}
					spy={true}
				>
					<BsFillChatSquareDotsFill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2rem]" />
					<span className=" leading-none text-[12px]">home</span>

				</Link>
			</div>
		</div>
	);
};

export default Nav;
