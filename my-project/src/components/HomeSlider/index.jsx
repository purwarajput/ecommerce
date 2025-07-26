import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider4 from '../../assets/slider4.jpg';
import slider5 from '../../assets/slider5.jpg';

import { Navigation,Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
        <div className="container">
            <Swiper    
            loop ={true}
            spaceBetween={10}
            navigation={true} 
            modules={[Navigation, Autoplay]} 
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
        }}
            className="sliderHome">
        
        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
                <img src={slider2} alt="Local slide" className="w-full"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src={slider3} alt="Local slide" className="w-full"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src={slider4} alt="Local slide" className="w-full"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src={slider5} alt="Local slide" className="w-full"/>
            </div>
        </SwiperSlide>

      </Swiper>
     </div>
    </div>
  );
};

export default HomeSlider;

