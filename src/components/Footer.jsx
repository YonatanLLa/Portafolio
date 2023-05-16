import React from "react";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { VscGithubAlt, VscRecordKeys } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs"
const Footer = () => {
	return (
		<div className="h-full">
			<div className=" bg-zinc-800 flex justify-around p-4">
				{/* Sobre Mi */}
        <div>
          <div>
            <h2 className="h2 m-2 ">Yonatan  </h2>
            <hr />
            <span className="">Llanto Aquino </span>
          </div>
          <div className="flex flex-row justify-center items-center">
              <h3 className="h3 ">
                Desarrollo Full Stack
              </h3>
           
          </div>
        </div>
				{/* Social */}
        <div className="flex gap-44">
        <div className="flex flex-col ">
					<h2 className="h2">Social</h2>
					<div className="flex flex-col gap-1">
						<div className="flex gap-1 items-center">
							{" "}
							<a
								href="https://github.com/YonatanLLa"
								target="_black"
								className=" cursor-pointer text-[1rem]"
							>
								<VscGithubAlt className=" fill-purple-400" />
							</a>
							<span className="text-[1rem]">GitHub</span>
						</div>
						<div className="flex gap-1 items-center">
							<a
								href="https://www.linkedin.com/in/yonatanllanto/"
								target="_black"
								className=" cursor-pointer text-[1rem]"
							>
								<SlSocialLinkedin className=" fill-purple-400" />
							</a>
							<span className="text-[1rem]">Linkedin</span>
						</div>
						<div className="flex gap-1 items-center">
							<a
								href="https://www.instagram.com/frontendyona/"
								target="_black"
								className=" cursor-pointer text-[1rem]"
							>
								<AiOutlineInstagram className=" fill-purple-400" />
							</a>
							<span className="text-[1rem]">Linkedin</span>
						</div>

						<div className="flex gap-1 items-center">
							<a
								href="https://www.instagram.com/frontendyona/"
								target="_black"
								className=" cursor-pointer text-[1rem]"
							>
								<TfiTwitter className=" fill-purple-400" />
							</a>
							<span className="text-[1rem]">Twitter</span>
						</div>
						<div className="flex gap-1 items-center">
							<a
								href="https://www.instagram.com/frontendyona/"
								target="_black"
								className=" cursor-pointer text-[1rem]"
							>
								<AiOutlineYoutube className=" fill-purple-400" />
							</a>
							<span className="text-[1rem]">Youtebe</span>
						</div>
					</div>
				</div>
				{/* concat */}
				<div>
					<h2 className="h2">Concat</h2>
					<div className="flex gap-1 items-center">
						<a
							href="https://www.instagram.com/frontendyona/"
							target="_black"
							className=" cursor-pointer text-[1rem]"
						>
							<BsWhatsapp className=" fill-purple-400" />
						</a>
            <span className="text-[1rem]">Whatsapp</span>
					</div>
				</div>

        </div>
				
			</div>
		</div>
	);
};

export default Footer;
