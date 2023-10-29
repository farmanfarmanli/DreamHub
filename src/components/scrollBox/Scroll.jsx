import React, { useEffect, useState } from 'react'
import './scroll.css'
import { FaArrowUp } from 'react-icons/fa'


const Scroll = () => {

    const [backToTopButton, setBackToTopButton] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        })
    }

    return (


        <div className='scroll-box' >
                {backToTopButton && (
                    <button className='scroll-btn'
                        onClick={scrollUp}
                    >
                        <FaArrowUp className='scrollArrow' />
                    </button>
                )}
        </div >
    )
}

export default Scroll