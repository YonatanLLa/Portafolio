import React, { useState } from "react";
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_ttt9rej",
				"template_to1gtyp",
				form.current,
				"e64YvNc7hR_JbMCwL"
			)
			.then(
				(result) => {
					
					form.current.reset(); // Reset the form
				},
				(error) => {
					return {
						error: error.message,
					}
				}
			);
		
	};

	return (
		<div className="section h-full" id="contact">
			<div className=" container lg:pl-28 lg:pr-28 mx-auto">
				{/* contenedor */}
				<div className="flex flex-col lg:gap-x-8 lg:mb-12 lg:mt-12">
					<div className="mb-16">
						<h2 className="h2 text-gradient text-3xl lg:text-4xl font-medium lg:font-extrabold mb-4 before:content-contact relative before:absolute before::opacity-40 before:-top-[2rem] before:left-60 let before:hidden before:lg:block z-40 text-center ">
							Trabaja conmigo
						</h2>
						<p className=" text-center ">
							La comunicación constante es muy importante para mi, asi que
							mantengamonos en contacto!
						</p>
					</div>
					<div className="flex flex-col lg:flex-row border rounded-[1.5rem] p-8 lg:bg-zinc-700/30">
						{/* datos */}
						<div className="flex-1 w-full flex-col gap-8">
							<div className="flex justify-start items-start gap-6">
								<MdOutlineMarkEmailUnread className="text-[2.5rem] fill-purple-500" />
								<div className=" pb-8">
									<h2 className="text-[1.5rem]">¿Quires contactarme?</h2>
									<h4 className="text-[15px]">estoy para ayudarte</h4>
									<p className="text-[15px] text-purple-400 ">
										Eviame un email a <br />{" "}
										<a
											className=" text-purple-400"
											href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
											target="_blank">
											yonatanllanto175@gmail.com
										</a>
									</p>
								</div>
							</div>

							<div className="flex  justify-start items-start gap-6">
								<MdOutlineLocationOn className="text-[2.5rem] fill-purple-500" />
								<div>
									<h2 className="text-[1.5rem]">Ubicacion actual</h2>
									<h4 className="text-[15px]">Lima, Perú</h4>
									<p className="text-[15px] text-purple-400">
										Trabajo remoto && precencial
									</p>
								</div>
							</div>
						</div>
						{/* inputs */}

						<form
							className=" space-y-8 w-full max-w-[580px]"
							ref={form}
							onSubmit={sendEmail}>
							<div className="flex gap-8">
								<input
									id="nombre"
									name="user_name"
									type="text"
									placeholder="Tu nombre"
									className=" caret-purple-400 bg-transparent border-b py-3 outline-none w-full placeholder:text-white/30 focus:border-purple-400 transition-all"
								/>
								<input
									id="email"
									name="user_email"
									type="text"
									placeholder="Tu email"
									className="caret-purple-400 bg-transparent border-b py-3 outline-none w-full placeholder:text-white/30 focus:border-purple-400 transition-all"
								/>
							</div>
							<input
								type="text"
								name="asunto"
								className="caret-purple-400  bg-transparent border-b py-3 outline-none w-full placeholder:text-white/30 focus:border-purple-400 transition-all"
								placeholder="Asunto"
							/>
							<textarea
								name="message"
								id=""
								cols="30"
								rows="5"
								className="caret-purple-400 bg-transparent border-b outline-none w-full placeholder:text-white/30 focus:border-purple-400 transition-all"
								placeholder="Tu mensaje"></textarea>
							<button className="btn px-8 py-2" type="submit">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
