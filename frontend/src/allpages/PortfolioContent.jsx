import React from 'react';
import './content.css';

import AOS from 'aos';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';
import TopNav from '../components/TopNav';

function PortfolioContent() {
    return (
        <div className='total-content'>
          <div className='top-component'>
              <TopNav />
          </div>
            <div id="home">
                <Home />
            </div>
            <hr />
            <div id="about">
                <About />
            </div>
            <hr />
            <div id="skills">
                <Skills />
            </div>
            <hr />
            <div id="projects">
                <Projects />
            </div>
            <hr />
            <div id="contacts">
                <Contacts />
            </div>
        </div>
    );
}

export default PortfolioContent;
