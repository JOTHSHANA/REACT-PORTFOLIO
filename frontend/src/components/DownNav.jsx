import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import joImg from '../assets/joImg.jpg';
import ArticleIcon from '@mui/icons-material/Article';



import './downNav.css';
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

const sections = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <InfoIcon /> },
    { id: 'skills', label: 'SkillS', icon: <ConstructionIcon /> },
    { id: 'projects', label: 'Projects', icon: <AccountTreeIcon /> },
    { id: 'certificates', label: 'Badges', icon: <WorkspacePremiumIcon /> },
    { id: 'contacts', label: 'Contact', icon: <PermPhoneMsgIcon /> }
];

function DownNav() {
    const [activeItem, setActiveItem] = useState('home');
    const [pdfLink, setPdfLink] = useState('1zOtAYg5h4BOBqxnOGan2TM_HF5ZpY45O');
    const [openProfilePopup, setOpenProfilePopup] = useState(false);
    const [openPdfPopup, setOpenPdfPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveItem(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveItem(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const iconStyle = (section) => ({
        fontSize: "30px",
        color: activeItem === section ? "var(--text)" : "var(--icons)",
        cursor: "pointer",
        padding: "10px",
        paddingTop: "10px",
        borderRadius: "0px",
        borderTop: activeItem === section ? "5px solid var(--icons)" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px"
    });

    const labelStyle = {
        fontSize: "12px",
        fontWeight: "900",
        color: "var(--icons)",
        display: "block",
        marginTop: "3px",
        opacity: "0.8"
    };

    return (
        <div className='total-side-bar1'>
            <div className='page-icons-container'>
                <div className='icons-dn'>
                    {sections.map(({ id, label, icon }) => (
                        <CustomTooltip key={id} title={label} placement="left" arrow sx={{ flex: "1" }}>
                            <div
                                style={iconStyle(id)}
                                onClick={() => scrollToSection(id)}
                            >
                                {icon}
                                {activeItem === id && <span style={labelStyle}>{label}</span>}
                            </div>
                        </CustomTooltip>
                    ))}
                    <CustomTooltip title="Hire me" placement="left" arrow>
                        <SchoolIcon sx={{ flex: "0.8", fontSize: "25px", color: "var(--icons)", cursor: "pointer", borderRadius: "5px" }} onClick={() => setOpenProfilePopup(true)} />
                    </CustomTooltip>
                </div>








                <Dialog open={openPdfPopup} onClose={() => setOpenPdfPopup(false)} fullWidth maxWidth="md">
                    <div style={{ backgroundColor: "var(--background)", color: "var(--text)" }}>
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

                <Dialog open={openProfilePopup} onClose={() => setOpenProfilePopup(false)} fullWidth maxWidth="sm">
                    <div style={{ backgroundColor: "var(--background)", color: "var(--text)" }}>
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



            </div>
        </div>
    );
}

export default DownNav;
