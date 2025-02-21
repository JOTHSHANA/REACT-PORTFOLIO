import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import './content.css'; // Ensure to style as needed
import learningCertificate from '../assets/linux.png';
import basicsOfPPython from '../assets/basicsOfPython.png';
import pyFundamentals from '../assets/pyFundamentals.png';
import sd from '../assets/sd.png';
import oracle from '../assets/oracle.png';
import madurai from '../assets/madurai.png';
import ardinnovate from '../assets/ardinnovate.png';
import internshipCertificate from '../assets/internship.png';
import webDev from '../assets/webdev.png';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { IconButton, Dialog, DialogContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';


function Certificates() {
    const [activeCategory, setActiveCategory] = useState('learning');
    const [openPopup, setOpenPopup] = useState(false);
    const [popupImage, setPopupImage] = useState('');
    const [groupSize, setGroupSize] = useState(window.innerWidth < 768 ? 1 : 2);


    useEffect(() => {
        const handleResize = () => {
            setGroupSize(window.innerWidth < 768 ? 1 : 2);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categories = {
        learning: [
            { id: 1, title: 'Web Development', img: webDev, desc: 'Web Development course offered by SkillForge' },
            { id: 2, title: 'Python Fundamentals', img: pyFundamentals, desc: 'Python Fundamentals offered by Infosys' },
            { id: 3, title: 'Software Development', img: sd, desc: 'Career Essentials in Software Development' },
            { id: 4, title: 'Basics of Python', img: basicsOfPPython, desc: 'Basics of Python' },
            { id: 5, title: 'Oracle cloud overview', img: oracle, desc: 'Oracle cloud badge' },

        ],
        events: [
            { id: 1, title: 'International conference', img: madurai, desc: 'Development of Science in recent trends' },
            { id: 2, title: 'Technical event', img: ardinnovate, desc: 'Ardinnovate' },
        ],
        internship: [
            { id: 1, title: 'Web Development Intern', img: internshipCertificate, desc: '2-Month Internship at SkillForge' },
        ],
    };

    const categoryIcons = {
        learning: <SchoolIcon />,
        events: <EventIcon />,
        internship: <WorkIcon />,
    };


    const handleImageClick = (image) => {
        setPopupImage(image);
        setOpenPopup(true);
    };


    const groupCertificates = (certificates, groupSize) => {
        const groups = [];
        for (let i = 0; i < certificates.length; i += groupSize) {
            groups.push(certificates.slice(i, i + groupSize));
        }
        return groups;
    };


    return (
        <div className='skills' id='skills'>
            <div className='text-area-skills'>
                <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="5" style={{ fontSize: "18px" }}>
                    <b>MY CERTIFICATES</b>
                </p>
                <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="5">
                    <b>__What I Earned?__</b>
                </p>
                <div className='page-content'>
                    <section className="certificates">
                        <div className='certificates-container'>

                            <div className='carousel'>
                                <Carousel
                                    autoPlay
                                    interval={5000}
                                    animation="slide"
                                    indicators={true}
                                    navButtonsAlwaysVisible={true}
                                >
                                    {groupCertificates(categories[activeCategory], groupSize).map((group, index) => (
                                        <div key={index} className='certificate-group'>
                                            {group.map((cert) => (
                                                <div key={cert.id} className='certificate-card' data-aos="flip-up" data-aos-duration="1000" data-aos-delay="20">
                                                    <div className="image-container">
                                                        <img src={cert.img} alt={cert.title} className='certificate-image' />

                                                    </div>
                                                    <div className="certificate-label">
                                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                            <h3 style={{ color: "var(--text)" }} className="certificate-title">{cert.title}</h3>
                                                            <p style={{ color: "gray" }} className="certificate-desc">{cert.desc}</p>
                                                        </div>
                                                        <div>
                                                            <IconButton
                                                                className='enlarge-icon'
                                                                onClick={() => handleImageClick(cert.img)}
                                                            >
                                                                <ZoomInIcon sx={{ color: "var(--icons)" }} />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}

                                </Carousel>
                            </div>
                            <div className='category-tabs'>
                                {Object.keys(categories).map((category) => (
                                    <button
                                        key={category}
                                        className={`tab-button ${activeCategory === category ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {categoryIcons[category]}
                                        <span className='button-words'>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    </button>
                                ))}
                            </div>


                            <Dialog open={openPopup} onClose={() => setOpenPopup(false)} maxWidth="md">
                                <DialogContent>
                                    <img src={popupImage} alt="Certificate" className='popup-image' />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
