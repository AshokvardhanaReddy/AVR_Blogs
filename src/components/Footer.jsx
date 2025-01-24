
import logo from "../assets/logo.png"
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex  gap-2 bg-[#F1F5F9] py-4 items-center justify-around sm:grid sm:place-items-center sm:gap-3'>
      <img src={logo} alt='company Logo' width={120} className = "sm:w-[40%]" />
      <p className='text-center'>All rights reserved. Designed By Ashokvardhan</p>
        <div className='flex items-center gap-4' >
            <FaFacebookF className='bg-white rounded-full text-4xl p-[8px] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:bg-[#E6E6FF] cursor-pointer' />
           <FaTwitter className='bg-white rounded-full text-4xl p-[8px] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:bg-[#E6E6FF] cursor-pointer' />
           <IoLogoWhatsapp className='bg-white rounded-full text-4xl p-[8px] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:bg-[#E6E6FF] cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer
