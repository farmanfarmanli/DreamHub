import React, { useEffect } from 'react'
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
import Aos from 'aos'
import 'aos/dist/aos.css'




const Home = () => {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
      disable: 'mobile'
    });
    
  }, [])


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