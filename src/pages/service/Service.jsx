import React, { useEffect } from 'react'
import './service.css'
import Cube from '../../components/serviceCubes/Cube'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Scroll from '../../components/scrollBox/Scroll';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Service = () => {

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
    <div className='service-pg'>
      <div className='background-img'>
        <h1>Service</h1>
        <div className="desc">
          <Link className="link" to="/" >Home</Link> <span>__</span> <span>Service</span>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg={12} className='service-upper' data-aos='fade-down'>
            <Row className='content-row'>
              <Col lg={6}>
                <h5 class="hover-underline-animation">Our Service</h5>
                <h3>A robust cloud solution
                  <br /> built with intelligence</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod
                  tempor <br/> incididunt ut labore dolore magna aliqua</p>
              </Col>
              <Col lg={5} className="button-div">
                <button className='software'>Browse Software</button>
              </Col>
            </Row>
          </Col>
          <Col lg={12} className='service-lower'>
            <Cube />
            <Cube />
          </Col>
        </Row>
      </Container>
    <Scroll/>
    </div>
  )
}

export default Service