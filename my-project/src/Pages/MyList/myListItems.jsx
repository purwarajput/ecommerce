import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { IoCloseCircle } from "react-icons/io5";
import cart2 from '../../assets/cart2.jpg';
import { Button } from '@mui/material';


const MyListItems = (props) => {
    

  return (
   <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]'>
                        <div className='img w-[15%] rounded-md overflow-hidden'>
                            <Link to="/product/7845" className='group'>
                                <img src={cart2} className='w-full group-hover:scale-105 transition-all'/>
                            </Link>
                        </div>

                        <div className='info w-[85%] relative'>
                            <IoCloseCircle className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all'/>
                            <span className='text-[13px]'>Koskii</span>
                            <h3 className='text-[15px]'><Link className='link'>Bandhani Printed Embroidered Saree</Link></h3>

                            <Rating name="size-small" defaultValue={4} size="small" readOnly />

                             <div className="flex items-center gap-4 mt-2 mb-2">
                                <span className="price text-[14px] font-[600]">₹1200</span>
                               <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">₹1350</span>
                               <span className="price text-primary text-[14px] font-[600]">10% OFF</span>
                              </div>

                              <Button className='btn-org btn-sm'>Add to Cart</Button>
                        </div>
                    </div>
  );
};

export default MyListItems;
 