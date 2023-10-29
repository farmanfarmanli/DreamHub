import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import './aboutUs.css'
import MyCarousel from '../carousel/MyCarousel'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <Container>
        <Row>
          <Col lg={6} className='leftt'>
            <MyCarousel />
          </Col>

          <Col lg={6} className='right-about'>
            <h5>About Us</h5>
            <h3>15 Years Of Experiences In
              Social Branding Agency</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod called tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud stander working process .
            </p>

            <div className='check'>
              <div className='d-flex'>
                <FaCheck className='checked blue' />
                <p className='check-p'>Lorem Ipsum generators on the tend to repeat.</p>
              </div>
              <div className='d-flex'>
                <FaCheck className='checked red' />
                <p className='check-p'>Higher Customer Satisfaction</p>
              </div>
              <div className='d-flex'>
                <FaCheck className='checked ocean' />
                <p className='check-p'>If you are going to use a passage.</p>
              </div>
            </div>
            <div>
              <button className='btn-hover'>Our About Us</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs