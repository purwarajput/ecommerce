import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ads1 from '../../assets/ads1.jpg';
import ads2 from '../../assets/ads2.jpg';

import { EffectFade, Navigation, Pagination} from 'swiper/modules';
import Button from '@mui/material/Button';

const HomeBannerV2 = () => {
  return (
     <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className='item w-full rounded-md overflow-hidden relative'>
            <img src={ads2} alt="Local slide"/>

            <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-start flex-col justify-center transition-all duration-700'>
              <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity- 0'>Mega Sale Fest</h4>
              <h2 className='text-[35px] font-[700] w-full text-left relative -right-[100%] opacity- 0'>Apple iPhone 
                13 128GB, Pink </h2>

                <h3 className=' flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity- 0'>Starting at <span className='text-primary text-[30px] font-[700]'>₹35,000.00</span></h3>

                 <div className='w-full relative -right-[100%] opacity- 0 btn_'>
                  <Button className='btn-org'>GRAB YOURS</Button>
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='item w-full rounded-md overflow-hidden'>
          <img src={ads1} alt="Local slide"/>

          <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700'>
              <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity- 0'>Mega Sale Fest</h4>
              <h2 className='text-[35px] font-[700] w-full text-left relative -right-[100%] opacity- 0'>Stylish Solid Round 
                Neck T-Shirt for Women</h2>

                <h3 className=' flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity- 0'>Starting at just<span className='text-primary text-[30px] font-[700]'>₹999.00</span></h3>

                <div className='w-full relative -right-[100%] opacity- 0 btn_'>
                  <Button className='btn-org'>GRAB YOURS</Button>
                </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default HomeBannerV2; 
