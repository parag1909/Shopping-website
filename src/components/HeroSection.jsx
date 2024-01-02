import React from 'react'
import './HeroSection.css'
const HeroSection = () => {
    return(
        <div className='hero'>
            <div className='left-section'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className='description'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST
                     AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <button className='btn-1'>Shop Now</button>
                <button className='btn-2'>Category</button>
            </div>
            <div className='right-section'>
                <img src="/images/shoe_image.png" alt="shoe-img"></img>
            </div>
        </div>
    )
}

export default HeroSection