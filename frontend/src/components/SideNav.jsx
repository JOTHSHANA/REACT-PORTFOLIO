import React from 'react';
import { styled } from '@mui/system';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SchoolIcon from '@mui/icons-material/School';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import PermPhoneMsgTwoToneIcon from '@mui/icons-material/PermPhoneMsgTwoTone';
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
    return (
        <div className='total-side-bar'>
            <div className='student-info'>
                <CustomTooltip title="Hire me" placement="left" arrow>
                    <SchoolIcon sx={{ fontSize: "30px", color: "#363636", cursor: "pointer" }} />
                </CustomTooltip>
            </div>
            <div className='page-icons-container'>
                <div className='icons'>
                    <CustomTooltip title="Home" placement="left" arrow>
                        <HomeTwoToneIcon sx={{ fontSize: "35px", color: "#363636", cursor: "pointer" }} />
                    </CustomTooltip>
                    <CustomTooltip title="About" placement="left" arrow>
                        <InfoTwoToneIcon sx={{ fontSize: "30px", color: "#363636", cursor: "pointer" }} />
                    </CustomTooltip>
                    <CustomTooltip title="Skills" placement="left" arrow>
                        <PsychologyTwoToneIcon sx={{ fontSize: "35px", color: "#363636", cursor: "pointer" }} />
                    </CustomTooltip>
                    <CustomTooltip title="Projects" placement="left" arrow>
                        <AccountTreeTwoToneIcon sx={{ fontSize: "30px", color: "#363636", cursor: "pointer" }} />
                    </CustomTooltip>
                    <CustomTooltip title="Contact" placement="left" arrow>
                        <PermPhoneMsgTwoToneIcon sx={{ fontSize: "33px", color: "#363636", cursor: "pointer" }} />
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
