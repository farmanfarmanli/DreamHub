import React from 'react'
import './portfolio.css'
import { Container, Row, Col } from 'react-bootstrap'
import port1 from './port1.jpg'
import port2 from './port2.jpg'
import port3 from './port3.jpg'
import port4 from './port4.jpg'
import port5 from './port5.jpg'
import port6 from './port6.jpg'

const Portfoli = () => {
  return (
    <div className='portfolio'>
      <Container>
        <Row>
          <Col lg={12} data-aos='fade-right'>
            <h5>Portfolio</h5>
            <h2>We build digital brands and experiences</h2>
            <p>Simplified IT is designed to help make sure you and your data is protected
              and your <br /> computer runs its best. The network Access provides is valuable.</p>
          </Col>

          <Col lg={12} data-aos='fade-left'>
            <div className='collage'>

              <div className='img-col'>
                <div className="overlay"></div>
                <img src={port1} alt="port" />
                <div className="img-title">
                  <h4>Mockup</h4>
                  <button>We Love Mockup Showcase</button>
                </div>
              </div>

              <div className='img-col'>
                <div className="overlay"></div>
                <img src={port2} alt="port" />
                <div className="img-title">
                  <h4>Mockup</h4>
                  <button>We Love Sale Mockup</button>
                </div>
              </div>

              <div className='img-col'>
                <div className="overlay"></div>
                <img src={port3} alt="port" />
                <div className="img-title">
                  <h4>Mockup</h4>
                  <button>We Love Mockup Showcase</button>
                </div>
              </div>

              <div className='img-col'>
                <div className="overlay"></div>
                <img src={port4} alt="port" />
                <div className="img-title">
                  <h4>Mockup</h4>
                  <button>We Love Mockup Showcase</button>
                </div>
              </div>

              <div className='img-col'>
                <div className="overlay"></div>
                <img src={port5} alt="port" />
                <div className="img-title">
                  <h4>Mockup</h4>
                  <button>We Love Mockup Showcase</button>
                </div>
              </div>

              <div className='img-col'>
                <div className="overlay"></div>
                <img src={port6} alt="port" />
                <div className="img-title">
                  <h4>Mockup</h4>
                  <button>We Love Mockup Showcase</button>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Portfoli