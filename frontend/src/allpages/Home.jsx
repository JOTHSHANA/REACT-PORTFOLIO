import React, { useEffect } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import home from '../assets/home.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {

  // let observer = new IntersectionObserver( (entries, observer) => {  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('aos-animate'); }else{ entry.target.classList.remove('aos-animate'); } }); }); document.querySelectorAll('[data-aos]').forEach(aosElem => { observer.observe(aosElem) });

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        } else {
          entry.target.classList.remove('aos-animate');
        }
      });
    });

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);


  return (
    <div className='home' id='home'>
      <div className='text-area-home'>
        <div>
          <p className='intro-text' style={{ fontSize: "30px", margin: "0px" }} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">Hey there!</p>
          <h1 className='large-name' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
            I'm JOTHSHANA
          </h1>
          <p className='intro-text' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">A passionate WEB DEVELOPER</p>
        </div>
        <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10" className='home-img' src={home} alt="image" />
      </div>

      <div className='contact-icons'>
        <div className='each-icon'>
          <a href="https://github.com/JOTHSHANA" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ background: "#181717", color: "#FFF", borderRadius: "10px", padding: "3px", fontSize: "30px", border: "0.001px solid gray" }} />
          </a>
        </div>
        <div className='each-icon'>
          <a href="https://t.me/+917306176900" target="_blank" rel="noopener noreferrer">
            <TelegramIcon sx={{ background: "#0088cc", color: "#FFF", borderRadius: "10px", padding: "3px", fontSize: "30px" }} />
          </a>
        </div>
        <div className='each-icon'>
          <a href="https://www.linkedin.com/in/jothshana" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ background: "#0A66C2", color: "#FFF", borderRadius: "10px", padding: "3px", fontSize: "30px" }} />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Home
