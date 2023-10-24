import React, {useState} from "react";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {

	const [color, setColor] = useState(false)


	return (
		<div className="h-full">
			<div className=" bg-zinc-800 flex flex-col lg:flex-row  justify-around p-4">
				{/* Sobre Mi */}
				<div>
					<div>
						<h2 className="h2 m-2 ">Yonatan </h2>
						<hr />
						<span className="">Llanto Aquino </span>
					</div>
					<div className="flex flex-row justify-center items-center">
						<h3 className="lg:block  lg:h3  hidden ">Desarrollo Full Stack</h3>
					</div>
				</div>
				{/* Social */}
				<div className="flex flex-col lg:flex-row lg:gap-44 lg:justify-between px-2">
					<div className="flex flex-col ">
						<h2 className="h2">Red Social</h2>
						<div className="flex flex-col gap-1">
							<div className="flex gap-1 items-center">
							<a
								href="https://github.com/YonatanLLa"
								target="_blank"
								className="cursor-pointer text-[1rem] flex justify-center items-center hover:text-purple-400 ">
								<div className="hover:fill-sky-50">
									<VscGithubAlt className="fill-purple-400 mr-2" />
								</div>
								<span className="text-[1rem]">GitHub</span>
								</a>

							</div>
							<div className="flex  gap-1 items-center">
								<a
									href="https://www.linkedin.com/in/yonatanllanto/"
									target="_black"
									className=" cursor-pointer text-[1rem] flex justify-center items-center hover:text-purple-400">
									<SlSocialLinkedin className=" fill-purple-400 mr-2 hover:fill-sky-50" />
									<span className="text-[1rem] ">Linkedin</span>
								</a>

							</div>
							<div className="flex  gap-1 items-center">
								<a
									href="https://www.instagram.com/frontendyona/"
									target="_black"
									className=" cursor-pointer text-[1rem]  flex justify-center items-center hover:text-purple-400">
									<AiOutlineInstagram className=" fill-purple-400 mr-2 hover:fill-sky-50" />
									<span className="text-[1rem] ">Instagram</span>
								</a>

							</div>

							<div className="flex  gap-1 items-center">
								<a
									href="https://www.instagram.com/frontendyona/"
									target="_black"
									className=" cursor-pointer text-[1rem] flex justify-center items-center hover:text-purple-400">
									<TfiTwitter className=" fill-purple-400 mr-2 hover:fill-sky-50" />
									<span className="text-[1rem] ">Twitter</span>
								</a>

							</div>
							
						</div>
					</div>
					{/* concat */}
					<div>
						<h2 className="h2">Contactame</h2>
						<div className="flex  gap-1 items-center">
							<a
								 href="https://wa.me/918199369"
								target="_black"
								className="flex justify-center items-center cursor-pointer text-[1rem] hover:text-purple-400" flex >
								<BsWhatsapp className=" fill-purple-400 mr-2 " />
								<span className="text-[1rem] ">Whatsapp</span>
							</a>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
