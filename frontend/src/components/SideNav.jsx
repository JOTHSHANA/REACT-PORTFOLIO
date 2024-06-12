import React from 'react';
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
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
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
                    <img className='joImg' src={joImg} alt="" />
                </div>
                <div className='info'>
                    <h3>Wanna hier mee!!</h3>
                    <button>button</button>
                </div>
                <div className='drawer'>
                    <div style={{height:"40px", width:"100%", backgroundColor:"#191b23", borderRadius:"10px 10px 0px 0px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <div style={{height:"10px", width:"100px", backgroundColor:"#252734", borderRadius:"20px"}}></div>
                    </div>
                    <div style={{}}>

                    </div>
                </div>
            </div>
        </Box>
    );

    return (
        <div className='total-side-bar'>
            <div className='student-info'>
                <CustomTooltip title="Hire me" placement="left" arrow>
                    <SchoolIcon sx={{ fontSize: "30px", color: "#12c5d1", cursor: "pointer" }} onClick={toggleDrawer('right', true)} />
                </CustomTooltip>
            </div>
            <div className='page-icons-container'>
                <div className='icons'>
                    <CustomTooltip title="Home" placement="left" arrow>
                        <HomeIcon sx={{ fontSize: "25px", color: "#12c5d1", cursor: "pointer", backgroundColor: "#333647", padding:"7px", borderRadius:"5px" }} onClick={() => scrollToSection('home')} />
                    </CustomTooltip>
                    <CustomTooltip title="About" placement="left" arrow>
                        <InfoIcon sx={{ fontSize: "25px", color: "#12c5d1", cursor: "pointer", backgroundColor: "#333647", padding:"7px", borderRadius:"5px"  }} onClick={() => scrollToSection('about')} />
                    </CustomTooltip>
                    <CustomTooltip title="Skills" placement="left" arrow>
                        <ConstructionIcon sx={{ fontSize: "25px", color: "#12c5d1", cursor: "pointer", backgroundColor: "#333647", padding:"7px", borderRadius:"5px"  }} onClick={() => scrollToSection('skills')} />
                    </CustomTooltip>
                    <CustomTooltip title="Projects" placement="left" arrow>
                        <AccountTreeIcon sx={{ fontSize: "25px", color: "#12c5d1", cursor: "pointer", backgroundColor: "#333647", padding:"7px", borderRadius:"5px"  }} onClick={() => scrollToSection('projects')} />
                    </CustomTooltip>
                    <CustomTooltip title="Contact" placement="left" arrow>
                        <PermPhoneMsgIcon sx={{ fontSize: "25px", color: "#12c5d1", cursor: "pointer", backgroundColor: "#333647", padding:"7px", borderRadius:"5px"  }} onClick={() => scrollToSection('contacts')} />
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
