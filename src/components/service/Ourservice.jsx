import React from 'react'
import './service.css'
import { Container, Row, Col } from 'react-bootstrap'
import Cube from '../serviceCubes/Cube'

const Ourservice = () => {
    return (
        <div className='service'>
            <Container className='text-center'>
                <Row>
                    <Col lg={12}>
                        <h5>Our Service</h5>
                        <h3>We Provide The Best Service For You</h3>
                        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscin
                            elit, sed do eiusmod <br /> tempor incididunt ut labore dolore magna aliqua</p>
                    </Col>
                    <Col lg={12}>
                        <Cube/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Ourservice