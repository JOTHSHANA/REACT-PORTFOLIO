import React from 'react'
import 'aos/dist/aos.css'

function About() {
    return (
        <div className='about' id='about'>
            <div className='text-area-about'>
                <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="5" style={{fontSize:"18px"}}><b>ABOUT ME</b></p>
                <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="5"><b>__Who am I?__</b></p>
            </div>
            {/* <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">ABOUT</h1> */}
        </div>
        
    )
}

export default About
