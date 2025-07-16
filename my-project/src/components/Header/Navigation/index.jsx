import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdRocketLaunch } from "react-icons/md";
import CategoryPanel from './CategoryPanel';

import "../Navigation/style.css"

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  }

  return (
    <>
      <nav className="py-2 bg-white border-b">
        <div className="container mx-auto flex items-center justify-between gap-6">

          {/* col_1: Shop By Categories Button */}
          <div className="col_1 flex items-center whitespace-nowrap">
            <Button className="!text-black !normal-case flex items-center gap-2 text-[14px] font-medium" onClick={openCategoryPanel}>
              <CgMenuLeftAlt className="text-[16px]" />
              <span>SHOP BY CATEGORIES</span>
              <FaAngleDown className="text-[14px] ml-auto font-bold cursor-pointer" />
            </Button>
          </div>

          {/* col_2: Navigation Links */}
          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-4 flex-wrap nav">
              <li className="list-none">
                <Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Home</Button></Link>
              </li>
              <li className="list-none relative">
                <Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Fashion</Button></Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* Men */}
                    <li className='list-none w-full relative'>
                      <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-shirts</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watch</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shirts</Button></Link></li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* Women */}
                    <li className='list-none w-full relative'>
                      <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Sarees</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Dresses</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Handbags</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Heels</Button></Link></li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* Kids */}
                    <li className='list-none w-full relative'>
                      <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Toys</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Clothing</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shoes</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>School Bags</Button></Link></li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* Girls */}
                    <li className='list-none w-full relative'>
                      <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Frocks</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Hair Bands</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Party Wear</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Sandals</Button></Link></li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* Boys */}
                    <li className='list-none w-full relative'>
                      <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shirts</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shorts</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Sports Shoes</Button></Link></li>
                            <li><Link to="/"><Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Caps</Button></Link></li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none"><Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Footwear</Button></Link></li>
              <li className="list-none"><Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Groceries</Button></Link></li>
              <li className="list-none"><Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Beauty</Button></Link></li>
              <li className="list-none"><Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Jewellery</Button></Link></li>
              <li className="list-none"><Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Electronics</Button></Link></li>
              <li className="list-none"><Link to="/"><Button className="link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-purple-600 text-[14px]">Wellness</Button></Link></li>
            </ul>
          </div>

          {/* col_3: Free Delivery Text */}
          <div className="col_3 ml-auto">
            <p className="text-[14px] font-[500] text-black flex items-center gap-2 whitespace-nowrap">
              <MdRocketLaunch className="text-[18px]" />
              Free Delivery Worldwide!
            </p>
          </div>
        </div>
      </nav>

      {/* Drawer Panel */}
      <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
    </>
  );
};

export default Navigation;
