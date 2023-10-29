import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Container, Row, Col } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import quote from './quote.png'
import testi1 from './testi1.png'
import testi2 from './testi2.png'
import testi3 from './test3.png'
import './testimonial.css'

const Testimonial = () => {
    return (
        <div className='testi'>
            <Container>
                <Row className='align-items-center d-flex justify-content-between'>
                    <Col lg={5} className='pb-3'>
                        <h5>Testimonial</h5>
                        <h3>Some Feedback From Our
                            Super Awesome Clients</h3>
                        <p>“A creative concept is an overarching that captures audience influences their emotional response and inspires
                            them to take action.It is a unifying theme that can be used across all campaign messages.”</p>
                        <button>View More</button>
                    </Col>


                    <Col lg={6} className='margin position-relative'>

                            <div className='animate-img'>
                                <img src={testi1} alt="test" className='left-img position-absolute' />
                                <img src={testi2} alt="test" className='right-img' />
                            </div>

                        <div className='quote'>

                            <Swiper
                                slidesPerView={1}
                                loop={true}
                                spaceBetween={15}>
                                <SwiperSlide>
                                    <div className='quote-box'>
                                        <div className='stars'>
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                        </div>
                                        <p> Dui, magna est sagittis cursus praesent to eu aliquet ullamcorper consectetur world
                                            clean design venenatis, pulvinar varius in offer dsyretium, sem pretium designer </p>

                                        <div className='quote-items'>
                                            <div className='person'>
                                                <img src={testi1} alt="person" />
                                                <div className='person-details'>
                                                    <span className='name'>Muyan Khanam</span>
                                                    <span className='prof'>Web Developer</span>
                                                </div>
                                            </div>

                                            <div className='quote-img'>
                                                <img src={quote} alt="quote" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='quote-box'>
                                        <div className='stars'>
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                        </div>
                                        <p> Dui, magna est sagittis cursus praesent to eu aliquet ullamcorper consectetur world
                                            clean design venenatis, pulvinar varius in offer dsyretium, sem pretium designer </p>

                                        <div className='quote-items'>
                                            <div className='person'>
                                                <img src={testi2} alt="person" />
                                                <div className='person-details'>
                                                    <span className='name'>Mashrafi Ben Mrtaja</span>
                                                    <span className='prof'>Web Developer</span>
                                                </div>
                                            </div>

                                            <div className='quote-img'>
                                                <img src={quote} alt="quote" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='quote-box'>
                                        <div className='stars'>
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                        </div>
                                        <p> Dui, magna est sagittis cursus praesent to eu aliquet ullamcorper consectetur world
                                            clean design venenatis, pulvinar varius in offer dsyretium, sem pretium designer </p>

                                        <div className='quote-items'>
                                            <div className='person'>
                                                <img src={testi3} alt="person" />
                                                <div className='person-details'>
                                                    <span className='name'>Bubbly Khanam</span>
                                                    <span className='prof'>Web Developer</span>
                                                </div>
                                            </div>

                                            <div className='quote-img'>
                                                <img src={quote} alt="quote" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className='down'>
                                <img src={testi3} alt="test" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial