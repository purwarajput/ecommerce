import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { ProductZoom } from '../../components/ProductZoom';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import { ProductDetailsComponent } from '../../components/ProductDetails';

export const ProductDetails = () => {

  const [activeTab, setActiveTab] = useState(0);
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
      <div className='container flex gap-8 items-center'>
            <div className='productZoomContainer w-[40%]'>
                <ProductZoom/>
            </div>

            <div className='productContent w-[60%] pr-10 pl-10'> 
              <ProductDetailsComponent/>
        </div>
      </div>

        <div className='container pt-10'>
              <div className='flex items-center gap-8 mb-5'>
                <span className={`link text-[17x] cursor-pointer font-[500] ${activeTab===0 && 'text-primary'}`} onClick={()=>setActiveTab(0)}>Description</span>
                <span className={`link text-[17x] cursor-pointer font-[500] ${activeTab===1 && 'text-primary'}`} onClick={()=>setActiveTab(1)}>Product Details</span>
                <span className={`link text-[17x] cursor-pointer font-[500] ${activeTab===2 && 'text-primary'}`} onClick={()=>setActiveTab(2)}>Reviews (5)</span>
              </div>

              {activeTab===0 && (
                <div className='shadow-md w-full py-5 px-8 rounded-md'>
            
                <p>Radiate grace in every step! Adorn your wardrobe with this statement Anarkali Kurta Set.This elegant, festive-ready ensemble is perfect for family gatherings, festive brunches, or elegant evenings.</p>

                <h4>Premium Craftsmanship</h4>

                <p>Tailored with care, featuring a flattering Anarkali silhouette, flared palazzo pants, and a sheer organza dupatta for an elevated finish.</p>

                <h4>Free Shipping & Return</h4>
                <p>We offer free shipping for products on orders above ₹249 and offer free delivery for all orders in US.</p>

                <h4>Money Back Guarantee</h4>
                <p>We guarantee our products and you could get back all of your money anytime you want in 30 days.</p>

                <h4>Online Support</h4>
                <p>You will get 24 hour support with this purchase product and you can return it within 20 days for an exhange.</p>
              </div>
              
              )}

              
              { activeTab === 1 && (
                 <div className='shadow-md w-full py-5 px-8 rounded-md'>
                

                <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Fabric
                </th>
                <th scope="col" class="px-6 py-3">
                    Pattern
                </th>
                <th scope="col" class="px-6 py-3">
                    Sleeve
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4 font-[500]">
                    Cotton Blend
                </td>
                <td class="px-6 py-4 font-[500]">
                    Printed Anarkali
                </td>
                <td class="px-6 py-4 font-[500]">
                    3/4th Sleeves
                </td>
                <td class="px-6 py-4 font-[500]">
                    Steel Blue
                </td>
            </tr>


            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4 font-[500]">
                    Cotton Blend
                </td>
                <td class="px-6 py-4 font-[500]">
                    Printed Anarkali
                </td>
                <td class="px-6 py-4 font-[500]">
                    3/4th Sleeves
                </td>
                <td class="px-6 py-4 font-[500]">
                    Steel Blue
                </td>
            </tr>


            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4 font-[500]">
                    Cotton Blend
                </td>
                <td class="px-6 py-4 font-[500]">
                    Printed Anarkali
                </td>
                <td class="px-6 py-4 font-[500]">
                    3/4th Sleeves
                </td>
                <td class="px-6 py-4 font-[500]">
                    Steel Blue
                </td>
            </tr>


            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4 font-[500]">
                    Cotton Blend
                </td>
                <td class="px-6 py-4 font-[500]">
                    Printed Anarkali
                </td>
                <td class="px-6 py-4 font-[500]">
                    3/4th Sleeves
                </td>
                <td class="px-6 py-4 font-[500]">
                    Steel Blue
                </td>
            </tr>


            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4 font-[500]">
                    Cotton Blend
                </td>
                <td class="px-6 py-4 font-[500]">
                   Printed Anarkali
                </td>
                <td class="px-6 py-4 font-[500]">
                    3/4th Sleeves
                </td>
                <td class="px-6 py-4 font-[500]">
                    Steel Blue
                </td>
            </tr>


            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4 font-[500]">
                    Cotton Blend
                </td>
                <td class="px-6 py-4 font-[500]">
                    Printed Anarkali
                </td>
                <td class="px-6 py-4 font-[500]">
                    3/4th Sleeves
                </td>
                <td class="px-6 py-4 font-[500]">
                    Steel Blue
                </td>
            </tr>

            
        </tbody>
    </table>
</div>
</div>
              )}

               
 
              { activeTab === 2 && (
                <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
                <div className='w-full productReviewsContainer'>
                <h2 className='text-[18px]'>Customer questions & answers</h2>

                <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5'>
                  <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://kalyaniinfrastructure.com/wp-content/uploads/2022/02/test1.jpg" className='w-full'/>
                      </div>

                    <div className='w-[80%]'>
                      <h4 className='text-[16px]'>Purwa Singh</h4>
                      <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                      <p className='mt-0 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>

                </div>

                <Rating name="size-small" defaultValue={4} readOnly />
               </div>

               <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://kalyaniinfrastructure.com/wp-content/uploads/2022/02/test1.jpg" className='w-full'/>
                      </div>

                    <div className='w-[80%]'>
                      <h4 className='text-[16px]'>Purwa Singh</h4>
                      <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                      <p className='mt-0 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>

                </div>

                <Rating name="size-small" defaultValue={4} readOnly />
               </div>

               <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://kalyaniinfrastructure.com/wp-content/uploads/2022/02/test1.jpg" className='w-full'/>
                      </div>

                    <div className='w-[80%]'>
                      <h4 className='text-[16px]'>Purwa Singh</h4>
                      <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                      <p className='mt-0 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>

                </div>

                <Rating name="size-small" defaultValue={4} readOnly />
               </div>

               <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://kalyaniinfrastructure.com/wp-content/uploads/2022/02/test1.jpg" className='w-full'/>
                      </div>

                    <div className='w-[80%]'>
                      <h4 className='text-[16px]'>Purwa Singh</h4>
                      <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                      <p className='mt-0 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>

                </div>

                <Rating name="size-small" defaultValue={4} readOnly />
               </div>

               <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://kalyaniinfrastructure.com/wp-content/uploads/2022/02/test1.jpg" className='w-full'/>
                      </div>

                    <div className='w-[80%]'>
                      <h4 className='text-[16px]'>Purwa Singh</h4>
                      <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                      <p className='mt-0 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>

                </div>

                <Rating name="size-small" defaultValue={4} readOnly />
               </div>

              </div>

              <br/>

              <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                <h2 className='text-[18px]'>Add a review</h2>

                <form className='w-full mt-5'>
                  <TextField
                  id="outlined-multiline-flexible"
                  label="Write a review..."
                  className='w-full mb-5'
                  multiline
                  Rows={5}
                  />
                  <br/><br/>
                  <Rating name="size-small" defaultValue={4}/>

                  <div className='flex items-center mt-5'>
                    <Button className='btn-org'>Submit Review</Button>
                  </div>

                </form>
              </div>
            </div>
          </div>
              )}
</div>

   <div className='container pt-8'>
    <h2 className="text-[20px] font-[600] pb-0">Related Favourites</h2>
        <ProductsSlider items={6} />
   </div>
  </section>
  </>
  );
};

