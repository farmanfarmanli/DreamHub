import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa'
import './team.css'
import firstmem from './team-1.jpg'
import secondmem from './team-2.jpg'
import thirdmem from './team-3.jpg'
import fourthmem from './team-4.jpg'

const Team = () => {
  return (
    <div className='team'>
      <Container>
        <Row>
          <Col lg={12} data-aos='fade-right'>
            <h5>Our Team</h5>
            <h2>Meet Our Creative Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> called tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad <br /> minim veniam, quis nostrud stander working process .</p>
          </Col>
        </Row>
        <Row className='py-3' data-aos='fade-left'>
          <Col lg={3} md={6}>
            <div className="card-box">
              <div className="card-img">
                <img src={firstmem} alt="member" />
                <div className="card-icons">
                  <FaFacebook className='card-icon' />
                  <FaTwitter className='card-icon' />
                  <FaLinkedin className='card-icon' />
                  <FaPinterest className='card-icon' />
                </div>
              </div>
              <div className="card-desc">
                <h4>Silvia Garden</h4>
                <span>Designer</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="card-box">
              <div className="card-img">
                <img src={secondmem} alt="member" />
                <div className="card-icons">
                  <FaFacebook className='card-icon' />
                  <FaTwitter className='card-icon' />
                  <FaLinkedin className='card-icon' />
                  <FaPinterest className='card-icon' />
                </div>
              </div>
              <div className="card-desc">
                <h4>Kane William Son</h4>
                <span>IT-Executive</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="card-box">
              <div className="card-img">
                <img src={thirdmem} alt="member" />
                <div className="card-icons">
                  <FaFacebook className='card-icon' />
                  <FaTwitter className='card-icon' />
                  <FaLinkedin className='card-icon' />
                  <FaPinterest className='card-icon' />
                </div>
              </div>
              <div className="card-desc">
                <h4>Bubli Khanam</h4>
                <span>Developer</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="card-box">
              <div className="card-img">
                <img src={fourthmem} alt="member" />
                <div className="card-icons">
                  <FaFacebook className='card-icon' />
                  <FaTwitter className='card-icon' />
                  <FaLinkedin className='card-icon' />
                  <FaPinterest className='card-icon' />
                </div>
              </div>
              <div className="card-desc">
                <h4>Jone Abraham</h4>
                <span>Web Designer</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Team