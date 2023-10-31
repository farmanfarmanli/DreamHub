import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './contactus.css'
import man from './contact.png'
import circle from './cnt-circle.png'
import manbg from './about-shp2.png'
import Register from '../contactRegister/Register'

const ContactUs = () => {

  return (
    <div className='contactUs'>
      <Container>
        <Row className='justify-content-between'>
          <Col lg={5} data-aos='zoom-in'>
            <div className='image-sec'>
              <div className='inner-img'>
                <img src={circle} alt="circle" />
              </div>
              <div className="inner-imge">
                <img src={manbg} alt='bg' />
              </div>
              <img src={man} alt="man" className='man' />
            </div>
          </Col>


          <Col lg={6} className='column' data-aos='zoom-out'>
            <div className='contactTitle'>
              <h5>Contact Us</h5>
              <h2>
                Contact Us Today and Get
                a Free Consultation!
              </h2>
            </div>
            <Register />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default ContactUs