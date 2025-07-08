import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
// import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src= {slider1}  alt="Local slide" className="w-full" />
        </SwiperSlide>

        <SwiperSlide>
            <img src= {slider2} alt="Local slide" className="w-full" />
        </SwiperSlide>

        {/* <SwiperSlide>
            <img src= {slider3} alt="Local slide" className="w-full" />
        </SwiperSlide> */}
        <SwiperSlide>
            <img src= {slider4} alt="Local slide" className="w-full" />
        </SwiperSlide>
        
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  );
};

export default HomeSlider;
