import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import pd_1 from '../../assets/pd_1.jpg';
import pd1 from '../../assets/pd1.jpg';
import pd2 from '../../assets/pd2.jpg';
import pd3 from '../../assets/pd3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const ProductZoom = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <div className='flex gap-3'>

      {/* Left Side Thumbnail Slider */}
      <div className='slider w-[15%]'>
        <Swiper
          ref={zoomSliderSml}
          direction={'vertical'}
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSliderThumbs h-[500px] overflow-hidden"
        >
          <SwiperSlide>
            <div
              className={`rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`}
              onClick={() => goto(0)}
            >
              <img src={pd_1} className='w-full transition-all group-hover:scale-105' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`}
              onClick={() => goto(1)}
            >
              <img src={pd2} className='w-full transition-all group-hover:scale-105' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`}
              onClick={() => goto(2)}
            >
              <img src={pd3} className='w-full transition-all group-hover:scale-105' />
            </div>
          </SwiperSlide>

          <SwiperSlide></SwiperSlide>

        </Swiper>
      </div>

      {/* Right Side Big Zoom Image */}
      <div className='zoomContainer w-[85%] h-[500px] overflow-hidden'>
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
        >
          <SwiperSlide>
            <InnerImageZoom zoomType="hover" zoomScale={1} src={pd1} />
          </SwiperSlide>

          <SwiperSlide>
            <InnerImageZoom zoomType="hover" zoomScale={1} src={pd2} />
          </SwiperSlide>

          <SwiperSlide>
            <InnerImageZoom zoomType="hover" zoomScale={1} src={pd3} />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};
