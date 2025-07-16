import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import ads_1 from '../../assets/ads_1.jpg';
import ads_2 from '../../assets/ads_2.jpg';
import ads_3 from '../../assets/ads_3.jpg';
import ads_4 from '../../assets/ads_4.jpg';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
     <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
            <BannerBox img={ads_1} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={ads_2} link={"/"}/>
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={ads_3} link={"/"}/>
        </SwiperSlide>

        <SwiperSlide>
            <BannerBox img={ads_4} link={"/"}/>
        </SwiperSlide>
      </Swiper>  
    </div>
  );
};

export default AdsBannerSlider;
