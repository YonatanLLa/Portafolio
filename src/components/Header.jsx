import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import logoImg from "../assets/logo.png"

const Header = () => {
	const [bg, setBg] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 50?setBg(true):setBg(false)
    })
  })
	return (
		<header id="home" className={`${bg? 'backdrop-blur-md border-b':'w-full p-2'} p-2 flex items-center fixed overflow-hidden z-50 top-0 w-full text-white transition-all duration-300`}>
        
        <div className="container z-10 mx-auto h-full flex items-center justify-between">
          <div>
            
            <img className="w-28" src={logoImg} alt="" />
          </div>
          {/* nav */}
          <div className="lg:block hidden">
            <Nav/>
          </div>

          {/* Redes sociales */}
          <div className="lg:block backdrop-blur-sm">
            <Socials/>
          </div>

          {/* NavMobile */}
         
        </div>      
		</header>
	);
};

export default Header;
