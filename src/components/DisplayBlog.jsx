
import authorImg from "../assets/profile_pic.jpg";
import React, { useState, useContext } from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { BlogContext } from '../context/BlogContextProvider';
import PageLoading from "./PageLoading";

const DisplayBlog = () => {
  const {url, displayBlogId} = useContext(BlogContext);

  const [data, setData] = useState()

  
  const fetchBlogData = async () => {
    await fetch(`${url}blogs/${displayBlogId}`)
    .then((res) => res.json())
    .then((data) => setData(data));
  }
   fetchBlogData();


  return ( data ? <>
    <div className='bg-gray-200  w-[80%] m-auto sm:w-[97%] md:w-[90%] '>
      <div className='text-center py-8 sm:py-4 '>
        <h1 className='text-4xl font-semibold max-w-[80%] mx-auto sm:max-w-[95%] sm:text-sm md:max-w-[95%] md:text-2xl'>{data.title}</h1>
        <img className='mx-auto my-3  w-[60px] border border-white rounded-full sm:my-2 ' src={authorImg} alt='author' />
        <p className=' text-lg  mx-auto sm:text-sm md:text-base '>{data.author}</p>
      </div>

      <div className=" w-[100%]" >
      <img className='block m-auto border-4 border-white' src= "https://dummyimage.com/250" width={800} height={480} alt='' />
      <p className='w-[80%] m-auto text-justify py-8 leading-6 sm:w-[97%] md:w-[90%]'> {data.description}</p>
      <p className='text-black font font-semibold pb-3 text-center'>Share this article on social media</p>

      <div className='flex justify-center pb-4 gap-4'>
            <FaFacebookF className='bg-white rounded-full text-4xl p-[8px] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:bg-[#E6E6FF]' />
           <FaTwitter className='bg-white rounded-full text-4xl p-[8px] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:bg-[#E6E6FF]' />
           <IoLogoWhatsapp className='bg-white rounded-full text-4xl p-[8px] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:bg-[#E6E6FF]' />
        </div>
      </div>

    
      </div>

  </> : <PageLoading/>
  )
}

export default DisplayBlog;
