import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaInstagram, FaLongArrowAltRight, FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa'
import newLogo from './logo31.png'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className='up-row'>
          <Col lg={6}>
            <ul>
              <li>
                <Link className="link" to="/about" >About</Link>
              </li>
              <li>
                <Link className="link" to="/service" >Service</Link>
              </li>
              <li>
                <Link className="link" to="/contact" >Contact Us</Link>
              </li>
            </ul>
          </Col>

          <Col lg={6} className='search-section'>
            <input type="search" placeholder='Search Here' name="search" id="search" />
            <button type='submit' id='search-btn'>Subscribe</button>
          </Col>
        </Row>
        <Row className='center-row'>

          <Col lg={3} md={6} sm={6} className='first-col mt-4'>
            <img src={newLogo} alt="logo" />
            <p>Gets started swiftly & easily by Instants <br/> importing a demo of your choice in a <br/> single click.</p>
            <div className="logos">
              <FaFacebook className='brand-logo' />
              <FaTwitter className='brand-logo' />
              <FaLinkedin className='brand-logo' />
              <FaPinterest className='brand-logo' />
              <FaInstagram className='brand-logo' />
            </div>
          </Col>

          <Col lg={3} md={6} sm={6} className='second-col mt-4'>
            <h5>Products</h5>
            <ul>
              <li><FaLongArrowAltRight className='mar-hover' /> Primary blocks</li>
              <li><FaLongArrowAltRight className='mar-hover' /> Content blocks</li>
              <li><FaLongArrowAltRight className='mar-hover' /> Infographic blocks</li>
              <li><FaLongArrowAltRight className='mar-hover' /> Business blocks</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={6} className='second-col mt-4'>
            <h5>Resources</h5>
            <ul>
              <li><FaLongArrowAltRight className='mar-hover' /> Support center</li>
              <li><FaLongArrowAltRight className='mar-hover' /> Documentation</li>
              <li><FaLongArrowAltRight className='mar-hover' /> Newsletter</li>
              <li><FaLongArrowAltRight className='mar-hover' /> Changelog</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={6} className='third-col mt-4'>
            <h5>Contact Us</h5>

            <ul>
              <li>
                <FaPhone className='brand-icons' />
                <p>Phone Number <br />
                  +123 456 7890</p>
              </li>
              <li className='my-4'>
                <FaEnvelope className='brand-icons' />
                <p>E-Mail <br />
                  example@gmail.com</p>
              </li>
              <li>
                <FaMapPin className='brand-icons' />
                <p>
                  Location <br />
                  16/B California,USA
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className='under-row'>
          <p>Copyright © 2023 <span>dreamhub</span> all rights reserved. Design By DRTheme.</p>
        </Row>
      </Container>
    </div>
  )
}

export default Footer