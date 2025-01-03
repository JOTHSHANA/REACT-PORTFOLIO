import React from 'react'
import inventory from '../assets/inventory.png'
import stores from '../assets/stores.png'
import files from '../assets/files.png'

function Projects() {
    return (
        <div className='projects' id='projects'>
            <div className='text-area-projects'>
                <p data-aos="flip-up" data-aos-duration="700" data-aos-delay="5" style={{ fontSize: "18px" }}><b>MY PROJECTS</b></p>
                <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="5"><b>__What I Did?__</b></p>
                <div className='page-content'>
                    <div className='grid-container'>

                        <div className="box" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                            <div className='project-image'>
                                <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={stores} alt="image" />
                            </div>
                            <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                <p className='project-title'>Product Tracking System</p>
                                <p className='role'>Worked as a frontend developer<br></br> (React JS) and played a small role in backend</p>
                            </div>
                        </div>
                        <div className="box" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                            <div className='project-image'>
                                <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={inventory} alt="image" />
                            </div>
                            <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                <p className='project-title'>Inventory Management System</p>
                                <p className='role'>Worked as a frontend developer<br></br> (React JS)</p>
                            </div>
                        </div>

                        <div className="box" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                            <div className='project-image'>
                                <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={files} alt="image" />
                            </div>
                            <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                <p className='project-title'>File Management System</p>
                                <p className='role'>Worked as fullstack developer<br></br> (React JS, Node JS, Express JS, MySql)</p>
                            </div>
                        </div>
                        {/* <div className="box" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                            <div className='project-image'>
                                <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={stores} alt="image" />
                            </div>
                            <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                <p className='project-title'>Product Tracking System</p>
                                <p className='role'>Worked as a frontend developer<br></br> (React JS) and played a small role in backend</p>
                            </div>
                        </div>
                        <div className="box" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                            <div className='project-image'>
                                <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={inventory} alt="image" />
                            </div>
                            <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                <p className='project-title'>Inventory Management System</p>
                                <p className='role'>Worked as a frontend developer<br></br> (React JS)</p>
                            </div>
                        </div>
                        <div className="box" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                            <div className='project-image'>
                                <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={stores} alt="image" />
                            </div>
                            <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                <p className='project-title'>Product Tracking System</p>
                                <p className='role'>Worked as a frontend developer<br></br> (React JS) and played a small role in backend</p>
                            </div>
                        </div>
                        <div className="box" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                            <div className='project-image'>
                                <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={inventory} alt="image" />
                            </div>
                            <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                <p className='project-title'>Inventory Management System</p>
                                <p className='role'>Worked as a frontend developer<br></br> (React JS)</p>
                            </div>
                        </div>
                         */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
