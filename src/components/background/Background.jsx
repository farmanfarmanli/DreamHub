import React from 'react'
import './background.css'
import counter from './counter1.png'
import counter2 from './counter2.png'
import counter3 from './counter3.png'
import counter4 from './counter4.png'
import { Container, Row, Col } from 'react-bootstrap'

const Background = () => {
    return (
        <div className='background'>
            <Container>
                <Row className='text-center'>
                    <Col lg={3} md={6} className='counter'>
                        <img src={counter} alt="counter" />
                        <h3>180 +</h3>
                        <span>Brands Joined</span>
                    </Col>
                    <Col lg={3} md={6} className='counter'>
                        <img src={counter2} alt="counter" />
                        <h3>80 +</h3>
                        <span>Marketing Experts</span>
                    </Col>
                    <Col lg={3} md={6} className='counter'>
                        <img src={counter3} alt="counter" />
                        <h3>3,460 +</h3>
                        <span>Satisfied Clients</span>
                    </Col>
                    <Col lg={3} md={6} className='counter'>
                        <img src={counter4} alt="counter" />
                        <h3>8,550 +</h3>
                        <span>Successful Campaigns</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Background