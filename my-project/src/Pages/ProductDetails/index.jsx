import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';

export const ProductDetails = () => {
  return (
    <>
    <div className='py-5'>
      <div className='container'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/" className='link transition !text-[14px]'>
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            to="/"
            className='link transition !text-[14px]'
          >
            Fashion
          </Link>
          <Link
            underline="hover"
            color="inherit"
            className='link transition !text-[14px]'
          >
            A-Line Kurti With Sharara & Dupatta
          </Link>
        
        </Breadcrumbs>
      </div>
    </div>


    <section className='bg-white py-5'>
      <div className='container flex gap-8'>
            <div className='productZoomContainer w-[40%]'>
                <ProductZoom/>
            </div>

            <div className='productContent w-[60%]'>
              <h1 className='text-[22px] font-[600] mb-2'> A-Line Kurti With Sharara & Dupatta</h1>
              <div className='flex items-center gap-3'>
                <span className='text-gray-400 text-[13px]'>Brands: <span className='font-[500] text-black opacity-75'>BIBA</span>
                </span>

                 <Rating name="size-small" defaultValue={4} size="small" readOnly />
                 <span className='text-[13px] cursor-pointer'>Review (6)</span>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">₹1450</span>
                <span className="price text-primary text-[18px] font-[600]">₹1300</span>
            </div>

            <br/>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ajnd scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </section>
    </>
  );
};

