import React, { useState } from 'react'
import './register.css'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {

    const [formData,setFormData] = useState({

    })
  
  
    const handleChange = (e) => {
      let name = e.target.name
      let value = e.target.value
  
      setFormData({
        ...formData,
        [name]:value
      })
    }
  
    const handleSubmit = async () => {
      try {
        axios.post('http://localhost:3000/users', {
        
        id:Math.random(),
        ...formData
  
        })
  
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <div>
            <form id='register-form' onSubmit={(e) => e.preventDefault()} >
                <Row>
                    <Col lg={6}>
                        <input type="text" name='name' placeholder='Your Name' onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col lg={6}>
                        <input type="email" name='email' placeholder='Your Email' onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col lg={6}>
                        <input type="text" name="subject" placeholder='Subject' onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col lg={6}>
                        <input type="text" name="phone" placeholder='Phone' onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col lg={12}>
                        <textarea cols="66" name="comment" rows="5" placeholder='Write your comment' onChange={(e) => handleChange(e)}></textarea>
                    </Col>
                    <Col lg={12}>
                        <button onClick={() => handleSubmit()} >Submit Now</button>
                    </Col>
                </Row>

            </form>
        </div>
    )
}

export default Register