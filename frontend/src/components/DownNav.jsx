import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './downNav.css';
import joImg from '../assets/joImg.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArticleIcon from '@mui/icons-material/Article';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useNavigate } from 'react-router-dom';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#000',
        color: 'white',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "1px",
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#000',
    },
});

function DownNav() {
    const [pdfLink, setPdfLink] = useState('1be99xDKKUTejiqCpRd0bZjbCoYIZTCUf');
    const [openProfilePopup, setOpenProfilePopup] = useState(false);
    const [openPdfPopup, setOpenPdfPopup] = useState(false);
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <div className='total-side-bar1'>
            <div className='page-icons-container'>
                <div className='icons-dn'>
                    <CustomTooltip title="Home" placement="left" arrow>
                        <HomeIcon sx={{flex:"1", fontSize: "25px", color: "var(--icons)", cursor: "pointer", padding: "7px", borderRadius: "5px", backgroundColor:"var(--icons-bg)" }} onClick={() => scrollToSection('home')} />
                    </CustomTooltip>
                    <CustomTooltip title="About" placement="left" arrow>
                        <InfoIcon sx={{flex:"1",  fontSize: "25px", color: "var(--icons)", cursor: "pointer", padding: "7px", borderRadius: "5px", backgroundColor:"var(--icons-bg)" }} onClick={() => scrollToSection('about')} />
                    </CustomTooltip>
                    <CustomTooltip title="Skills" placement="left" arrow>
                        <ConstructionIcon sx={{flex:"1",  fontSize: "25px", color: "var(--icons)", cursor: "pointer", padding: "7px", borderRadius: "5px", backgroundColor:"var(--icons-bg)" }} onClick={() => scrollToSection('skills')} />
                    </CustomTooltip>
                    <CustomTooltip title="Projects" placement="left" arrow>
                        <AccountTreeIcon sx={{flex:"1",  fontSize: "25px", color: "var(--icons)", cursor: "pointer", padding: "7px", borderRadius: "5px", backgroundColor:"var(--icons-bg)" }} onClick={() => scrollToSection('projects')} />
                    </CustomTooltip>
                    <CustomTooltip title="Certificates" placement="left" arrow>
                        <WorkspacePremiumIcon sx={{flex:"1", fontSize: "25px", color: "var(--icons)", cursor: "pointer", backgroundColor: "var(--icons-bg)", padding: "7px", borderRadius: "5px" }} onClick={() => scrollToSection('certificates')} />
                    </CustomTooltip>
                    <CustomTooltip title="Contact" placement="left" arrow>
                        <PermPhoneMsgIcon sx={{flex:"1",  fontSize: "25px", color: "var(--icons)", cursor: "pointer", padding: "7px", borderRadius: "5px", backgroundColor:"var(--icons-bg)" }} onClick={() => scrollToSection('contacts')} />
                    </CustomTooltip>
                    <CustomTooltip title="Hire me" placement="left" arrow>
                        <SchoolIcon sx={{flex:"1",  fontSize: "25px", color: "var(--icons)", cursor: "pointer", padding: "7px", borderRadius: "5px", backgroundColor:"var(--icons-bg)" }} onClick={() => setOpenProfilePopup(true)} />
                    </CustomTooltip>
                </div>

                {/* Profile Popup */}
                <Dialog open={openProfilePopup} onClose={() => setOpenProfilePopup(false)} fullWidth maxWidth="sm">
                    <div style={{backgroundColor:"var(--background)", color:"var(--text)"}}>
                        <DialogTitle>Hi, I'm Jothshana S M!</DialogTitle>
                        <DialogContent>
                            <div className='side-profile'>
                                <div className='photo'>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <WhatsAppIcon sx={{ color: "var(--icons)", fontSize: "30px" }} />
                                        <InstagramIcon sx={{ color: "var(--icons)", fontSize: "30px" }} />
                                        <GitHubIcon sx={{ color: "var(--icons)", fontSize: "30px" }} />
                                        <TelegramIcon sx={{ color: "var(--icons)", fontSize: "30px" }} />
                                    </div>
                                    <img className='joImgs' src={joImg} alt="Profile" />
                                </div>
                                <div className='info'>
                                    <p style={{ letterSpacing: "0px", padding: "0px 10px", fontWeight: "500", color: "var(--icons)" }}>A dedicated web developer with a passion for creating stunning digital experiences. Currently pursuing a Bachelor of Engineering at Bannari Amman Institute of Technology, Erode, Tamil Nadu.</p>
                                    <button className='button' onClick={() => {
                                        setOpenProfilePopup(false);
                                        setOpenPdfPopup(true);
                                    }}><ArticleIcon /> Download Curriculum Vitae</button>
                                </div>
                            </div>
                        </DialogContent>
                    </div>
                </Dialog>

                {/* PDF Popup */}
                <Dialog open={openPdfPopup} onClose={() => setOpenPdfPopup(false)} fullWidth maxWidth="md">
                    <div style={{backgroundColor:"var(--background)", color:"var(--text)"}}>
                        <DialogTitle>Curriculum Vitae</DialogTitle>
                        <DialogContent>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <button className='button' onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = `https://drive.google.com/uc?export=download&id=${pdfLink}`;
                                    link.download = 'file.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}>Download</button>
                            </div>
                            <div className='pdf-view'>
                                <iframe
                                    src={`https://drive.google.com/file/d/${pdfLink}/preview`}
                                    style={{ width: '100%', height: '500px', border: 'none' }}
                                    allow="autoplay"
                                ></iframe>
                            </div>
                        </DialogContent>
                    </div>
                </Dialog>
            </div>
        </div>
    );
}

export default DownNav;
