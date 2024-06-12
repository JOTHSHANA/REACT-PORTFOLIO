import React , {useEffect}from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                <h1 className='large-name' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                    Hi! this is JOTHSHANA
                </h1>
                <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">A passionate web developer</p>
            </div>
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
