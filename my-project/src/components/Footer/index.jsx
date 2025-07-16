import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturnBold } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftsSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { BsChatLeftText } from "react-icons/bs";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { IoLogoPinterest } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <>
    <footer className='py-6 bg-[#fafafa]'>
        <div className='container'>
            <div className='flex items-center justify-center gap-2 py-8 pb-8'>
                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <FaShippingFast className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                    <h3 className='text-[16px] font-[600] mt-3'>Free Shipping</h3>
                    <p className='text-[12px] font-[500]'>For all Orders Over ₹199</p>
                </div>

                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <PiKeyReturnBold className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                    <h3 className='text-[16px] font-[600] mt-3'>Easy 20-Day Returns</h3>
                    <p className='text-[12px] font-[500]'>For an Exchange Product</p>
                </div>

                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <BsWallet2 className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                    <h3 className='text-[16px] font-[600] mt-3'>Secure Checkout</h3>
                    <p className='text-[12px] font-[500]'>All Major Cards Accepted</p>
                </div>

                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <LiaGiftsSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                    <h3 className='text-[16px] font-[600] mt-3'>Special Gift Inside</h3>
                    <p className='text-[12px] font-[500]'>With Your First Order</p>
                </div>

                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                    <h3 className='text-[16px] font-[600] mt-3'>24/7 Customer Care</h3>
                    <p className='text-[12px] font-[500]'>We’re Always Here to Help</p>
                </div>

            </div>
            <br/>

        <hr/>

                <div className='footer flex py-8'>
                    <div className='part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]'>
                        <h2 className='text-[18px] font-[600] mb-4'>Contact us</h2>
                        <p className='text-[13px] font-[400] pb-4'>SnapShop-Mega Super Store<br/>
                        Chandigarh
                        India</p>

                        <Link className="link text-[13px]" to="mailto:someone@example.com">s.purwarajput@gmail.com</Link>

                        <span className='text-[22px] font-[600] block w-full mt-3 mb-5 text-primary'>(+91) 8092-873-661</span>

                         <div className='flex items-center gap-2'>
                            < BsChatLeftText className="text-[40px] text-primary"/>
                            <span className='text-[16px] font-[600] pl-5'>Online Chat<br/>
                            Get Expert Help</span>
                         </div>
                    </div>

                    <div className='part2 w-[40%] flex pl-8'>
                        <div className='part2_col1 w-[50%]'>
                        <h2 className='text-[18px] font-[600] mb-4'>Products</h2>

                        <ul className='list'>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Prices drop</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>New Products</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Best Sales</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Contact Us</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Sitemap</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Stores</Link></li>
                        </ul>
                        </div>


                        <div className='part2_col2 w-[50%]'>
                        <h2 className='text-[18px] font-[600] mb-4'>Our Company</h2>

                        <ul className='list'>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Delivery</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Legal Notice</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Terms and Conditions Of Use</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>About Us</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Secure Payment</Link></li>
                            <li className='list-none text-[14px] w-full mb-2'><Link to="/" className='link'>Login</Link></li>
                        </ul>
                        </div>
                    </div>

                    <div className='part2 w-[35%] flex pl-8 flex-col pr-8'>
                    <h2 className='text-[18px] font-[600] mb-4'>Subscribe to newsletter</h2>
                    <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>

                    <form className='mt-5'>
                        <input type="text" className='w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]' placeholder="Your Email Address"/>

                        <Button className='btn-org'>SUBSCRIBE</Button>

                        <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy policy" />
                    </form>
                    </div>
                </div>
        </div>
    </footer>

    <div className='bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3'>
        <div className="container flex items-center justify-between">
            <ul className='flex items-center gap-2'>
                <li className='list-none'><Link to="/" target="_blank" className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                <FaFacebookSquare className='text-[15px] group-hover:text-white'/>
                </Link>
                </li>

                <li className='list-none'><Link to="/" target="_blank" className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                <TiSocialYoutube className='text-[20px] group-hover:text-white'/>
                </Link>
                </li>

                <li className='list-none'><Link to="/" target="_blank" className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                <IoLogoPinterest className='text-[15px] group-hover:text-white'/>
                </Link>
                </li>

                <li className='list-none'><Link to="/" target="_blank" className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                <FaSquareInstagram className='text-[15px] group-hover:text-white'/>
                </Link>
                </li>

            </ul>


            <p className='text-[13px] text-center mb-0'>© 2025 - SnapShop</p>

            <div className='flex items-center'>
              <img src="/carte_bleue.png" alt="image"/>
              <img src="/visa.png" alt="image"/>
              <img src="/master_card.png" alt="image"/>
              <img src="/american_express.png" alt="image"/>
              <img src="/paypal.png" alt="image"/>
        </div>
    </div>
</div>

</>

  );
};

export default Footer;
