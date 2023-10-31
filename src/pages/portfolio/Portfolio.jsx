import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './portfolio.css'
import Portfoli from '../../components/portfolio/Portfoli'
import Dragcar from '../../components/dragCarousel/Dragcar'
import Scroll from '../../components/scrollBox/Scroll';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {

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
    <div className='port-pg'>
      <div className='background-img'>
        <h1>Portfolio</h1>
        <div className="desc">
          <Link className="link" to="/" >Home</Link> <span>__</span> <span>Portfolio</span>
        </div>
      </div>
      <Portfoli/>
      <Dragcar/>

      <Scroll/>
    </div>
  )
}

export default Portfolio