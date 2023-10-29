import React from 'react'
import './contact.css'
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa'
import Register from '../../components/contactRegister/Register';
import Dragcar from '../../components/dragCarousel/Dragcar';
import Scroll from '../../components/scrollBox/Scroll';



const Contact = () => {
  return (
    <div className='contact-pg'>
      <div className='background-img'>
        <h1>Contact Us</h1>
        <div className="desc">
          <Link className="link" to="/" >Home</Link> <span>__</span> <span>Contact Us</span>
        </div>
      </div>

      <div className="contact-content">
        <Container>
          <Row>
            <Col lg={12} className='contact-upper'>
              <h2>Contact Us Information.</h2>
              <p>Dui, magna est sagittis cursus. Mattis praesent eu aliquet ullamcorper <br /> consectetur facilisi
                clean design venenatis, pulvinar varius mattis. Pretium,<br /> sem pretium eu purus id tellus</p>
            </Col>
          </Row>
          <Row className='my-5 pb-5'>
            <Col lg={4} md={6} className='mt-4'>
              <div className="contact-info">
                <FaPhone className='contact-icon' />
                <div className='contact-article'>
                  <h5>Call Us Now</h5>
                  <p>+98 678 (960) 280</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className='mt-4'>
              <div className="contact-info">
                <FaEnvelope className='contact-icon' />
                <div className='contact-article'>
                  <h5>E-Mail-Us</h5>
                  <p>example123@gmail.com</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className='mt-4'>
              <div className="contact-info">
                <FaMapPin className='contact-icon' />
                <div className='contact-article'>
                  <h5>Our Locations</h5>
                  <p>1/A New Road,Colifornia,USA</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className='contact-map'>
          <Container>
            <Row>
              <Col lg={6}>
                <Register />
              </Col>
              <Col lg={6}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.6948195279383!2d49.7549870079219!3d40.48201606595527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308f7ea324c9a7%3A0x47e2b3601cdf324c!2zIkJyaWxsaWFudCIgxZ9hZGzEsXEgc2FyYXnEsQ!5e0!3m2!1sen!2saz!4v1698233807054!5m2!1sen!2saz" className='map' title='location'></iframe>
              </Col>
            </Row>
          </Container>
        </div>

        <Dragcar />
      </div>
      <Scroll />
    </div>
  )
}

export default Contact