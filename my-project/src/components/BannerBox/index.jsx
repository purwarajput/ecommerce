import React from 'react'

const BannerBox = (props) => {
  return (
   <div className="box bannerBox overflow-hidden rounded-[20px]">
      <img src={props.img}alt="banner" className= "w-full transition-transform duration-300 hover:scale-105"/>
    </div>
  )
}

export default BannerBox;
