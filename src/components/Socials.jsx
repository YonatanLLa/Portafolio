import React from 'react'
import {FiGithub} from "react-icons/fi" 
import {SlSocialLinkedin} from "react-icons/sl"
import {AiOutlineInstagram} from "react-icons/ai"
const Socials = () => {
  return (
    <div className='flex gap-7'>
      <div>
        <FiGithub/>
      </div>
      <div>
        <SlSocialLinkedin/>
      </div>
      <div>
        <AiOutlineInstagram/>
      </div>
    </div>
  )
}

export default Socials