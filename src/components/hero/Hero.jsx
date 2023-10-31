import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlay } from 'react-icons/fa'
import './hero.css'
import bannerImg from './hero.png'

const Hero = () => {


  return (
    <div className='hero'>
      <Container>
        <Row>
          <Col lg={7} className='left-hero' data-aos='zoom-out'>
            <h5>Welcome to Dreamhub</h5>
            <h1>We create digital experiences</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .</p>
            <div>
              <button className='btn-purple'>Get Started</button>
              <button className='play-button'>
                <FaPlay className='play' />
              </button>
            </div>
          </Col>
          <Col lg={5} className='right-hero' data-aos='zoom-in'>
            <img src={bannerImg} alt="img" />
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Hero