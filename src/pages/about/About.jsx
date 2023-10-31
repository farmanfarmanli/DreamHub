import React, { useEffect } from 'react'
import './about.css'
import { Link } from "react-router-dom";
import Secondabout from '../../components/secondAbout/Secondabout';
import Team from '../../components/ourTeam/Team';
import Scroll from '../../components/scrollBox/Scroll';
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  
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
    <div className='about-pg'>
      <div className='background-img'>
        <h1>About Us</h1>
        <div className="desc">
          <Link className="link" to="/" >Home</Link> <span>__</span> <span>About Us</span>
        </div>
      </div>
      <Secondabout />
      <Team />

      <Scroll/>
    </div>
  )
}

export default About