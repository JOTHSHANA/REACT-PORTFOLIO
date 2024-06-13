import React, { useState } from 'react';
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
import joImg from '../assets/joImg.jpg'

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
    const [pdfLink, setPdfLink] = useState('10YoMKF45h-BTbVsWSUyWcHLvTE2lgRlB');
    const [state, setState] = useState({
        right: false,
    });
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        if (!open) {
            setDrawerVisible(false);
        }
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
                <div className='photo'  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10" >
                <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                        <div style={{backgroundColor:"var(--background-1)", padding:"7px 10px", borderRadius:"5px", border: "2px solid var(--icons)"}}>ic1</div>
                        <div style={{backgroundColor:"var(--background-1)", padding:"7px 10px", borderRadius:"5px", border: "2px solid var(--icons)"}}>ic2</div>
                        <div style={{backgroundColor:"var(--background-1)", padding:"7px 10px", borderRadius:"5px", border: "2px solid var(--icons)"}}>ic3</div>
                    </div>
                    <img className='joImg' src={joImg} alt="" />
                    
                </div>
                <div className='info'>
                    <h4 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10" style={{textAlign:"center", letterSpacing:"1px", padding:"0px 27px"}}>Hi, I'm Jothshana S M! A dedicated web developer with a passion for creating stunning digital experiences. Currently pursuing a Bachelor of Engineering at Bannari Amman Institute of Technology, Erode, Tamil Nadu.</h4>
                    <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10" className='button' onClick={() => setDrawerVisible(!drawerVisible)}>Explore my Resume</button>
                </div>
                {drawerVisible && (
                    <div className='drawer' data-aos="fade-up">
                        <div style={{ height: "40px", width: "100%",border:"1px solid black", backgroundColor: "var(--background)", borderRadius: "10px 10px 0px 0px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div></div>
                            <div></div>
                            <div style={{ height: "10px", width: "100px", backgroundColor: "#252734", borderRadius: "20px" }}></div>
                            <div className='download-button'>
                                <button className='button' onClick={() => {
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

    return (
        <div className='total-side-bar'>
            <div className='student-info'>
                <CustomTooltip title="Hire me" placement="left" arrow>
                    <SchoolIcon sx={{ fontSize: "30px", color: "var(--icons)", cursor: "pointer" }} onClick={toggleDrawer('right', true)} />
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
