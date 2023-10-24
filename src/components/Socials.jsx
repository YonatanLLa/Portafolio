import React from 'react'
import {VscGithubAlt} from "react-icons/vsc" 
import {SlSocialLinkedin} from "react-icons/sl"
import {AiOutlineInstagram} from "react-icons/ai"
const Socials = () => {
  return (
    <div className='flex gap-7'>
      <a href='https://github.com/YonatanLLa' target='_black' className=' cursor-pointer  text-[1.5rem]'>
        <VscGithubAlt className=' fill-purple-400 hover:fill-sky-50 shadow-lg transition duration-300 transform hover:scale-105 '/>
      </a>
      <a href='https://www.linkedin.com/in/yonatanllanto/' target='_black' className=' cursor-pointer  text-[1.5rem]' >
        <SlSocialLinkedin  className=' fill-purple-400 hover:fill-sky-50 shadow-lg transition duration-300 transform hover:scale-105 '/>
      </a>
      <a href='https://www.instagram.com/frontendyona/'  target='_black'className=' cursor-pointer  text-[1.5rem]'>
        <AiOutlineInstagram  className=' fill-purple-400 hover:fill-sky-50 shadow-lg transition duration-300 transform hover:scale-105 '/>
      </a>
    </div>
  )
}

export default Socials