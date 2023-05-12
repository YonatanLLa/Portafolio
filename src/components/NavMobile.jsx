import React from "react";
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
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* div nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rouded-full mx-w-[460px] mx-auto">
          <Link>
            <FaHome/>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavMobile