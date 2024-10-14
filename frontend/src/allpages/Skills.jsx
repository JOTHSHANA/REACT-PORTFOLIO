import React from 'react';
import './content.css'; // Make sure to import the CSS file
import python from '../assets/python.png';
import java from '../assets/c_lang.png'; // Update to correct image
import c_lang from '../assets/c_lang.png'; // Add C image
// import html from '../assets/html.png'; // Add image path for HTML
// import css from '../assets/css.png'; // Add image path for CSS
// import javascript from '../assets/javascript.png'; // Add image path for JavaScript
// import react from '../assets/react.png'; // Add image path for React.js
// import node from '../assets/node.png'; // Add image path for Node.js
// import express from '../assets/express.png'; // Add image path for Express.js
// import mysql from '../assets/mysql.png'; // Add image path for MySQL
// import git from '../assets/git.png'; // Add image path for Git
// import github from '../assets/github.png'; // Add image path for GitHub
// import linux from '../assets/linux.png'; // Add image path for Linux

const skillsImages = {
    python: python,
    java: python,
    c_lang: c_lang,
    html: python,
    css: python,
    javascript: python,
    react: python,
    node: python,
    express: python,
    mysql: python,
    git: python,
    github: python,
    linux: python,
};

const skillsData = [
    { name: 'c_lang', percentage: 80 },
    { name: 'python', percentage: 70 },
    { name: 'html', percentage: 90 },
    { name: 'css', percentage: 85 },
    { name: 'javascript', percentage: 80 },
    { name: 'react', percentage: 75 },
    { name: 'node', percentage: 70 },
    { name: 'express', percentage: 65 },
    { name: 'mysql', percentage: 75 },
    { name: 'git', percentage: 80 },
    { name: 'github', percentage: 80 },
    { name: 'linux', percentage: 70 },
];

function Skills() {
    return (
        <div className='skills' id='skills'>
            <div className='text-area-skills'>
                <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="5" style={{ fontSize: "18px" }}>
                    <b>MY SKILLS</b>
                </p>
                <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="5">
                    <b>__What I Know?__</b>
                </p>
                <div className='page-content'>
                    <section className="skillss">
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {skillsData.map((skill, index) => (
                                <li key={index} style={{ display: 'inline-block', width: '18%' }}>
                                    {/* Use skillsImages object to map skill name to image */}
                                    <img style={{ height: "70px" }} src={skillsImages[skill.name]} alt={skill.name} />
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
                                    </div>
                                    <span className="percentage">{skill.percentage}%</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Skills;
