import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Home() {
    return (
        <div className='home' id='home'>
            <h1>HOME</h1>
            <div className='contact-icons'>
                <div className='each-icon'>
                    <WhatsAppIcon sx={{ fontSize: "30px", backgroundColor: "#25D366", color: "white", padding: "3px", borderRadius: "10px" }} />
                </div>
                <div className='each-icon'>
                    <InstagramIcon sx={{ background: "linear-gradient(135deg, #f9ce34, #ee2a7b,#6228d7)", color: "#FFF", borderRadius: "10px", padding: "3px", fontSize: "30px" }} />
                </div>
                <div className='each-icon'>
                    <GitHubIcon sx={{ background: "#181717", color: "#FFF", borderRadius: "10px", padding: "3px", fontSize: "30px", border:"0.001px solid gray" }} />
                </div>
                
            </div>
        </div>
    )
}

export default Home
