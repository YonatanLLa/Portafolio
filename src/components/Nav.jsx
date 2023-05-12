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
		<div className="flex gap-16">
			
			<div className="flex flex-col items-center justify-center relative">
				<Link to="banner" className="">
					<FaHome className="fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2.5rem] focus:fill-stone-900" />
				</Link>
			</div>

			<div>
				<Link to="about">
					<RiUser3Fill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2.5rem]" />
				</Link>
			</div>

			<div>
				<Link to="home">
					<BsFillClipboardDataFill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2.5rem]" />
				</Link>
			</div>

			<div>
				<Link>
					<BsBriefcaseFill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2.5rem]" />
				</Link>
			</div>

			<div>
				<Link>
					<BsFillChatSquareDotsFill className=" fill-stone-500 hover:fill-zinc-200 hover:cursor-pointer w-[1.8rem] h-[2.5rem]" />
				</Link>
			</div>
		</div>
	);
};

export default Nav;
