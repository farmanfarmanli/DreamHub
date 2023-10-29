import React, { useRef, useState } from 'react'
import './header.css'
import { FaTwitter, FaFacebook, FaLinkedin, FaSearch, FaBars, FaBan, FaAngleDown } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from './logo.png'
import secondImg from './logo22.png'

const Header = () => {

  const [navbar, setNavbar] = useState(false)

  const imageRef = useRef()
  const secondRef = useRef()

  const colorRef = useRef()
  const colorRef3 = useRef()
  const colorRef4 = useRef()
  const colorRef5 = useRef()
  const colorRef6 = useRef()

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
      colorRef.current.style.color = 'white'
      colorRef3.current.style.color = 'white'
      colorRef4.current.style.color = 'white'
      colorRef5.current.style.color = 'white'
      colorRef6.current.style.color = 'white'

      imageRef.current.style.display = 'none'
      secondRef.current.style.display = 'block'
    } else {
      setNavbar(false)
      colorRef.current.style.color = '#39364e'
      colorRef3.current.style.color = '#39364e'
      colorRef4.current.style.color = '#39364e'
      colorRef5.current.style.color = '#39364e'
      colorRef6.current.style.color = '#39364e'

      imageRef.current.style.display = 'block'
      secondRef.current.style.display = 'none'
    }
  }

  window.addEventListener('scroll', changeBackground);

  const menuRef = useRef()
  const showRef = useRef()
  const hideRef = useRef()

  function showMenu() {
    menuRef.current.style.display = 'flex'
    showRef.current.style.display = 'none'
    hideRef.current.style.display = 'block'
  }

  function hideMenu() {
    menuRef.current.style.display = 'none'
    hideRef.current.style.display = 'none'
    showRef.current.style.display = 'block'
  }

  return (
    <div className='header'>
      <div className='hidden-menu'>
        <div className="left-hidden">
          <h4>Dreamhub</h4>
        </div>
        <div className="right-hidden">
          <button ref={showRef} onClick={showMenu}>
            <FaBars className='hamburger-btn' />
          </button>

          <button ref={hideRef} className='none' onClick={hideMenu}>
            <FaBan className='hamburger-btn' />
          </button>
        </div>
      </div>
      <div className='upper'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="left">
                <ul>
                  <li>+00884567000</li>
                  <li>Help Desk</li>
                  <li>Why Dreamhub</li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className="right text-end">
                <FaFacebook className='icons' />
                <FaTwitter className='icons' />
                <FaLinkedin className='icons' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={navbar ? 'lower fixed' : 'lower'}>


        <Container className='p-0'>
          <Row className='align-items-center justify-content-around'>
            <Col lg={2} className='p-0'>
              <div className='menu-left'>
                <img src={logo} ref={imageRef} alt="logo" />
                <img src={secondImg} ref={secondRef} className='none' alt="logo" />
              </div>
            </Col>
            <Col lg={9} className='p-0 d-flex justify-content-end'>
              <div className='menu-right'>
                <nav>
                  <ul>
                    <li className='list-item'>
                      <Link className="link" to="/" ref={colorRef} >Home</Link>
                    </li>
                    <li className='list-item'>
                      <div className='list-tool'>
                        <Link className="link" to="/about" ref={colorRef6}>Pages</Link>
                        <FaAngleDown className='angle-down' />
                      </div>
                      <div className='hidden-sections'>
                        <ul>
                          <li>About Us</li>
                          <li>Pricing</li>
                          <li>Our Team</li>
                          <li>Faq</li>
                          <li>404</li>
                          <li>Contact Us</li>
                        </ul>
                      </div>
                    </li>
                    <li className='list-item'>
                      <div className="list-tool">
                        <Link className="link" to="/service" ref={colorRef5}>Services</Link>
                        <FaAngleDown className='angle-down' />
                      </div>
                      <div className='hidden-sections'>
                        <ul>
                          <li>Our Service</li>
                          <li>Service Details</li>
                        </ul>
                      </div>
                    </li>
                    <li className='list-item'>
                      <div className="list-tool">
                        <Link className="link" to="/portfolio" ref={colorRef4}>Portfolio</Link>
                        <FaAngleDown className='angle-down' />
                      </div>
                      <div className='hidden-sections'>
                        <ul>
                          <li>Portfolio</li>
                          <li>Portfolio Two</li>
                          <li>Portfolio Three</li>
                          <li>Portfolio Details</li>
                        </ul>
                      </div>
                    </li>
                    <li className='list-item'>
                      <Link className="link" to="/contact" ref={colorRef3}>Contact</Link>
                    </li>

                  </ul>
                </nav>

                <div className='button-sec'>
                  <FaSearch className='icon' />
                  <Link className="contact" to="/contact">Contact Us</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ul ref={menuRef} className='hidden-hamburger'>
        <li>
          <Link className="links" to="/" >Home</Link>

        </li>
        <li>
          <Link className="links" to="/about">About</Link>
        </li>
        <li>
          <Link className="links" to="/contact" >Contact</Link>
        </li>
        <li>
          <Link className="links" to="/portfolio" >Portfolio</Link>
        </li>
        <li>
          <Link className="links" to="/service" >Service</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header