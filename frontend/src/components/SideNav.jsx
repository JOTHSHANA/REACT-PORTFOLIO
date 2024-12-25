import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './component.css';
import joImg from '../assets/joImg.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
// Create a custom-styled Tooltip
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#000', // Background color
        color: 'white', // Text color
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "1px",
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#000', // Arrow color
    },
});

function SideNav() {
    const [pdfLink, setPdfLink] = useState('1m4H0k5ZLh5X-FLMXkAVixcEnJaAvsTTf');
    const [state, setState] = useState({
        right: false,
    });
    const [drawerVisible, setDrawerVisible] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        setState({ right: true });

    }


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        if (!open) {
            setDrawerVisible(false);
        }
    };

    const handleClick = () => {
        toggleDrawer(false);
        handleNavigate();
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: 500,
                height: '100%',
                background: 'var(--background)',
                color: 'var(--text)',
                padding: '20px 20px 0px 20px',
                overflow: 'hidden'
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='side-profile'>

                <div className='photo'>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="10" className='profile-icons'><WhatsAppIcon sx={{ color: "var(--icons)", fontSize: "30px" }} /></div>
                        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="10" className='profile-icons'><InstagramIcon sx={{ color: "var(--icons)", fontSize: "30px" }} /></div>
                        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="10" className='profile-icons'><GitHubIcon sx={{ color: "var(--icons)", fontSize: "30px" }} /></div>
                        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="10" className='profile-icons' ><TelegramIcon sx={{ color: "var(--icons)", fontSize: "30px" }} /></div>
                    </div>
                    <img data-aos="fade-up" data-aos-duration="1000" data-aos-delay="10" className='joImg' src={joImg} alt="" />

                </div>
                <div className='info'>
                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10" style={{ letterSpacing: "0px", padding: "0px 27px", fontWeight: "500", color: "var(--icons)" }}>Hi, I'm Jothshana S M! A dedicated web developer with a passion for creating stunning digital experiences. Currently pursuing a Bachelor of Engineering at Bannari Amman Institute of Technology, Erode, Tamil Nadu.</p>
                    <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10" className='button' onClick={() => setDrawerVisible(!drawerVisible)}><ArticleIcon /> Download Curriculum Vitae</button>
                </div>
                {drawerVisible && (
                    <div className='drawer' data-aos="fade-up">
                        <div style={{ height: "40px", width: "100%", border: "1px solid black", backgroundColor: "var(--background)", borderRadius: "10px 10px 0px 0px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div className='download-button'>
                                <button className='button' style={{ position: "relative", left: "0" }} onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = `https://drive.google.com/uc?export=download&id=${pdfLink}`;
                                    link.download = 'file.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    setTimeout(() => setDrawerVisible(false), 3000);
                                }}>Download</button>
                            </div>
                        </div>

                        <div className='pdf-view'>
                            <iframe
                                src={`https://drive.google.com/file/d/${pdfLink}/preview`}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </Box >
    );


    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.ctrlKey) {
                if (event.key === 'h') {
                    event.preventDefault();
                    scrollToSection('home');
                } else if (event.key === 'a') {
                    event.preventDefault();
                    scrollToSection('about');
                } else if (event.key === 's') {
                    event.preventDefault();
                    scrollToSection('skills');
                } else if (event.key === 'p') {
                    event.preventDefault();
                    scrollToSection('projects');
                } else if (event.key === 'c') {
                    event.preventDefault();
                    scrollToSection('contacts');
                }
            }
        };

        // Add the event listener
        window.addEventListener('keydown', handleKeydown);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <div className='total-side-bar'>
            <div className='student-info'>
                <CustomTooltip title="Hire me" placement="left" arrow>
                    <SchoolIcon sx={{
                        fontSize: '30px',
                        color: 'var(--icons)',
                        cursor: 'pointer',
                    }} onClick={toggleDrawer('right', true)} />
                </CustomTooltip>
            </div>
            <div className='page-icons-container'>
                <div className='icons'>
                    <CustomTooltip title="Home" placement="left" arrow>
                        <HomeIcon sx={{ fontSize: "25px", color: "var(--icons)", cursor: "pointer", backgroundColor: "var(--icons-bg)", padding: "7px", borderRadius: "5px" }} onClick={() => scrollToSection('home')} />
                    </CustomTooltip>
                    <CustomTooltip title="About" placement="left" arrow>
                        <InfoIcon sx={{ fontSize: "25px", color: "var(--icons)", cursor: "pointer", backgroundColor: "var(--icons-bg)", padding: "7px", borderRadius: "5px" }} onClick={() => scrollToSection('about')} />
                    </CustomTooltip>
                    <CustomTooltip title="Skills" placement="left" arrow>
                        <ConstructionIcon sx={{ fontSize: "25px", color: "var(--icons)", cursor: "pointer", backgroundColor: "var(--icons-bg)", padding: "7px", borderRadius: "5px" }} onClick={() => scrollToSection('skills')} />
                    </CustomTooltip>
                    <CustomTooltip title="Projects" placement="left" arrow>
                        <AccountTreeIcon sx={{ fontSize: "25px", color: "var(--icons)", cursor: "pointer", backgroundColor: "var(--icons-bg)", padding: "7px", borderRadius: "5px" }} onClick={() => scrollToSection('projects')} />
                    </CustomTooltip>
                    <CustomTooltip title="Contact" placement="left" arrow>
                        <PermPhoneMsgIcon sx={{ fontSize: "25px", color: "var(--icons)", cursor: "pointer", backgroundColor: "var(--icons-bg)", padding: "7px", borderRadius: "5px" }} onClick={() => scrollToSection('contacts')} />
                    </CustomTooltip>
                </div>
                <Drawer
                    anchor='right'
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </div>
        </div>
    );
}

export default SideNav;