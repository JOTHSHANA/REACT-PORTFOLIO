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
                width: 580,
                height: '100%',
                background: 'var(--background)',
                color: 'var(--text)',
                padding: '10px'
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            JOTHSHANA S M
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
