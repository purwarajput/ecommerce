import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import s_1 from '../../assets/s_1.png';
import s_2 from '../../assets/s_2.png';
import s_3 from '../../assets/s_3.png';
import s_4 from '../../assets/s_4.png';
import s_5 from '../../assets/s_5.png';
import s_6 from '../../assets/s_6.png';
import s_7 from '../../assets/s_7.png';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src={s_1} alt="Local slide" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src={s_2} alt="Local slide" className="w-[60px]"/>
            <h3 className="text-[15px] font-[500] mt-3">Footwear</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src={s_3} alt="Local slide" className="w-[60px]"/>
            <h3 className="text-[15px] font-[500] mt-3">Groceries</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src={s_4} alt="Local slide" className="w-[60px]"/>
            <h3 className="text-[15px] font-[500] mt-3">Beauty</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src={s_5} alt="Local slide" className="w-[60px]"/>
            <h3 className="text-[15px] font-[500] mt-3">Jewellery</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src={s_6} alt="Local slide" className="w-[60px]"/>
            <h3 className="text-[15px] font-[500] mt-3">Electronics</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src={s_7} alt="Local slide" className="w-[60px]"/>
            <h3 className="text-[15px] font-[500] mt-3">Wellness</h3>
          </div>
          </Link>
        </SwiperSlide>

      </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider;
