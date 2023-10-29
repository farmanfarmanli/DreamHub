import React from 'react'
import './second.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import img from './about.png'
import animage from './about-shp2.png'
import animage2 from './animated.png'

const Secondabout = () => {
  return (
    <div className='about_Us'>
      <Container>
        <Row>

          <Col lg={5} className='left-about'>
            <div className="image-section">
              <div className="inner-animation">
                <img src={animage} alt='bg' />
              </div>
              <img className='double' src={img} alt="img" />
              <div className='second-animation'>
                <img src={animage2} alt="bg" />
              </div>
            </div>
          </Col>

          <Col lg={7} className='right-about'>
            <h5>About Us</h5>
            <h3>15 Years Of Experiences In <br />
              Social Branding Agency</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod called tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud stander working process .
            </p>

            <div className='check'>
              <div className='d-flex'>
                <FaCheck className='checked blue' />
                <p>Lorem Ipsum generators on the tend to repeat.</p>
              </div>
              <div className='d-flex'>
                <FaCheck className='checked red' />
                <p>Higher Customer Satisfaction</p>
              </div>
              <div className='d-flex'>
                <FaCheck className='checked ocean' />
                <p>If you are going to use a passage.</p>
              </div>
            </div>
            <div>
              <button className='btn-purple'>Our About Us</button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Secondabout