import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carimg from './about2.jpg'
import './carousel.css'

const MyCarousel = () => {
  return (
    <Carousel>
        <div>
        <img src={carimg} alt="Slide" />
      </div>
      <div>
        <img src={carimg} alt="Slide" />
      </div>
      <div>
        <img src={carimg} alt="Slide" />
      </div>
    </Carousel>
  )
}

export default MyCarousel