import React from 'react'
import './content.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import AOS from 'aos';


function PortfolioContent() {
    
    return (
        <div className='total-content'>
            <div className='home' id='home'>
                <div className='contact-icons'>
                    <div className='each-icon'>
                        <WhatsAppIcon sx={{ fontSize: "30px", backgroundColor: "#25D366", color: "white", padding: "3px", borderRadius: "10px" }} />
                    </div>
                    <div className='each-icon'>
                        <InstagramIcon sx={{ background: "linear-gradient(135deg, #f9ce34, #ee2a7b,#6228d7)", color: "#FFF", borderRadius: "10px", padding: "3px",fontSize: "30px" }} />
                    </div>
                </div>
            </div>
            <div className='about' id='about'>

            </div>
            <div className='skills' id='skills'>

            </div>
            <div className='projects' id='projects'>

            </div>
            <div className='contact' id='contact'>

            </div>
        </div>
    )
}

export default PortfolioContent
