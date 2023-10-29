import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import './dragcar.css'
import firstBrand from './brand1.png'
import secondBrand from './brand2.png'
import thirdBrand from './brand3.png'
import Fourthrand from './brand4.png'
import Fifthrand from './brand5.png'

const Dragcar = () => {
  return (
    <div className='slider'>
      <Swiper
        // spaceBetween={1}
        loop={true}
        
        breakpoints={{
          0:{
            slidesPerView: 1
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          1444: {
            slidesPerView: 5,
          }
        }}
      >
        <SwiperSlide><img src={firstBrand} alt='company' /></SwiperSlide>
        <SwiperSlide><img src={secondBrand} alt='company' /></SwiperSlide>
        <SwiperSlide><img src={thirdBrand} alt='company' /></SwiperSlide>
        <SwiperSlide><img src={Fourthrand} alt='company' /></SwiperSlide>
        <SwiperSlide><img src={Fifthrand} alt='company' /></SwiperSlide>
        <SwiperSlide><img src={firstBrand} alt='company' /></SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Dragcar