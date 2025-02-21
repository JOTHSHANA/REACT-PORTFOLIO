import React, { useState } from 'react'
import 'aos/dist/aos.css'
import about from '../assets/about.png';


function About() {
    const [pdfLink, setPdfLink] = useState('1zOtAYg5h4BOBqxnOGan2TM_HF5ZpY45O');
    return (
        <div className='about' id='about'>
            <div className='text-area-about'>
                <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="5" style={{ fontSize: "18px" }}><b>ABOUT ME</b></p>
                <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="5"><b>__Who am I?__</b></p>
                <div className='page-content'>
                    <div className='content-section'>
                        <h1 className='topics' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">I'm JOTHSHANA S M, a Web Developer</h1>
                        <p className='paragraph' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">As a Computer Science Engineer skilled in React, MySQL, Express, and Node.js, I excel in building high-performance web applications. My proven ability to deliver scalable, efficient solutions and my commitment to innovation make me a valuable asset for forward-thinking teams. I am eager to contribute to impactful projects with top-tier companies.</p>
                        <h1 className='topics' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">Why To Choose Me?</h1>
                        <p className='paragraph' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">I am a dedicated worker with a passion for delivering high-quality results and a commitment to continuous improvement. My focus on innovation and attention to detail ensures exceptional outcomes for every project. As a team worker who can adapt to any work environment, I thrive in collaborative settings and tackle complex challenges to drive project success.</p>
                        <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className='button' style={{ position: "relative", left: "0" }} onClick={() => {
                            const link = document.createElement('a');
                            link.href = `https://drive.google.com/uc?export=download&id=${pdfLink}`;
                            link.download = 'file.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            setTimeout(() => setDrawerVisible(false), 3000);
                        }}>Download CV</button>
                    </div>
                    <div className='image-section'>
                        <div style={{ display: "flex", alignItems: "end", flexDirection: "column" }}>
                            <div className='floating-box' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">JOTHSHANA S M</div>
                            <div className='floating-box' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"> PASSIONATE WEB DEVELOPER</div>
                        </div>
                        <img data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="10" style={{ height: "250px" }} className='abt-img' src={about} alt="image" />
                    </div>
                </div>
            </div>
            {/* <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">ABOUT</h1> */}
        </div>

    )
}

export default About
