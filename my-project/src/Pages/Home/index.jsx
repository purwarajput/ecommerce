import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';


const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>                                                                                                                               
    <HomeSlider/>
    <HomeCatSlider/>


    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="leftSec">
            <h2 className="text-[20px] font-[600]">Snap Favourites</h2>
            <p className="text-[14px] font-[400]">Get the latest updates on your favourite brands and products.</p>
          </div>

          <div className="rightSec w-[60%]">
             <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Jewellery" />
        <Tab label="Electronics" />
        <Tab label="Wellness" />
      </Tabs>

          </div>
        </div>

        <ProductsSlider items={6} />
      </div>
    </section>

    <section className='py-4 pt-2 bg-white'> 
      <div className="container">
        <div className="Free Shipping w-[80%] m-auto py-4 p-4 border-2 border-[#ec3cce] flex items-center justify-between rounded-md">
          <div className="col1 flex items-center gap-4">
            <LiaShippingFastSolid className="text-[50px]"/>
            <span className="text-[20px] font-[600] uppercase">Free Shipping </span>
          </div>

          <div className="col2">
            <p className="mb-0 font-[500]">First Time Here? Enjoy Free Delivery on Us!</p>
          </div>

          <p className="font-bold text-[25px]">Flat ₹249</p>
          </div>

          <AdsBannerSlider items={4} />

        </div> 
    </section>


    <section className="py-5 pt-0 bg-white">
      <div className="container">
                    <h2 className="text-[20px] font-[600]">Latest Favourites</h2>
        <ProductsSlider items={6} />

        <AdsBannerSlider items={3} />
      </div>
    </section>

    <section className="py-5 pt-0 bg-white">
      <div className="container">
                    <h2 className="text-[20px] font-[600]">Freshly Snapped</h2>
        <ProductsSlider items={6} />

        <AdsBannerSlider items={3} />
      </div>
    </section>

    <br/><br/><br/><br/><br/>

    </>
  )
}

export default Home;
