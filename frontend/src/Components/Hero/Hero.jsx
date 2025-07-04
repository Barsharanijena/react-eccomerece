import React from 'react'
import "./Hero.css"
const Hero = () => {
    return (
        <div className = 'hero'>
            <div className="hero-left">
            <h2>Best Deals! Best Prices!</h2>
            </div>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src = {hand_icon} alt = "" />
            </div>


            <div className='hero-right'>

            </div>
        </div>
    )
}

export default Hero;