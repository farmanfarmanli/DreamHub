import React from 'react'
import './cube.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRight, FaCalculator, FaEnvelopeOpenText, FaLaptopCode } from 'react-icons/fa'

const Cube = () => {
    return (
        <div className='cube'>
            <Container>
                <Row className='rows'>
                    <Col lg={3} md={6} className='column'>
                        <FaEnvelopeOpenText className='box-icon' />
                        <h4>Email Marketing</h4>
                        <p>Lorem ipsum dolor sit amet, consecte <br /> adipiscing elit, sed do eiusmod tempor <br /> incidiunt ut labore</p>
                        <div className='readMore'>
                            <p className='m-0'>Read More</p>
                            <FaArrowRight className='arrow' />
                        </div>
                    </Col>

                    <Col lg={3} md={6} className='column'>
                        <FaLaptopCode className='box-icon' />
                        <h4>Fast Performance</h4>
                        <p>Lorem ipsum dolor sit amet, consecte <br /> adipiscing elit, sed do eiusmod tempor <br /> incidiunt ut labore</p>
                        <div className='readMore'>
                            <p className='m-0'>Read More</p>
                            <FaArrowRight className='arrow' />
                        </div>
                    </Col>

                    <Col lg={3} md={6} className='column'>
                        <FaCalculator className='box-icon' />
                        <h4>Cloud Management</h4>
                        <p>Lorem ipsum dolor sit amet, consecte <br /> adipiscing elit, sed do eiusmod tempor <br /> incidiunt ut labore</p>
                        <div className='readMore'>
                            <p className='m-0'>Read More</p>
                            <FaArrowRight className='arrow' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cube