import React from 'react'
import './home.css'
import Hero from '../../components/hero/Hero'
import Background from '../../components/background/Background'
import Portfolio from '../../components/portfolio/Portfoli'
import AboutUs from '../../components/aboutUs/AboutUs'
import Dragcar from '../../components/dragCarousel/Dragcar'
import Testimonial from '../../components/testimonial/Testimonial'
import ContactUs from '../../components/contactUs/ContactUs'
import Secondabout from '../../components/secondAbout/Secondabout'
import Ourservice from '../../components/service/Ourservice'
import Scroll from '../../components/scrollBox/Scroll'




const Home = () => {
  return (
    <>
    <Hero />
    <Secondabout/>
    <Ourservice/>
    <Background />
    <Portfolio />
    <AboutUs />
    <Dragcar/>
    <Testimonial/>
    <ContactUs />
    <Scroll/>
    </>
  )
}

export default Home