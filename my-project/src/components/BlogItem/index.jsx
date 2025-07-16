import React from 'react';
import { IoTimerOutline } from "react-icons/io5";
import blog1 from '../../assets/blog1.jpg';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";


const BlogItem = () => {
  return (
    <div className="blogItem group">
        <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
            <img src={blog1} alt="blog image" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"/>

            <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1'>
                <IoTimerOutline className='text-[16px]' /> 5 APRIL 2023
            </span>
        </div>

        <div className="info py-4">
            <h2 className='text-[15px] font-[600] text-black'>
                <Link to="/" className='link'>Power Behind The Data</Link>
            </h2>
            <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
        
            <Link className='link font-[500] text-[14px] flex items-center gap-1'>Read More <MdArrowForwardIos/></Link>
        </div>
    </div>
  )
}

export default BlogItem;
