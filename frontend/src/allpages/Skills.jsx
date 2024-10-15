import React from 'react';
import './content.css'; // Make sure to import the CSS file
import python from '../assets/python.png';
import java from '../assets/java.png'; // Update to correct image
import c_lang from '../assets/c_lang.png'; // Add C image
import html from '../assets/html.png'; // Add image path for HTML
import css from '../assets/css.png'; // Add image path for CSS
import js from '../assets/js.png'; // Add image path for JavaScript
import react from '../assets/react.png'; // Add image path for React.js
import node from '../assets/node.png'; // Add image path for Node.js
import express from '../assets/express.png'; // Add image path for Express.js
import mysql from '../assets/mysql.png'; // Add image path for MySQL
import git from '../assets/git.png'; // Add image path for Git
import github from '../assets/github.png'; // Add image path for GitHub
import linux from '../assets/linux.png'; // Add image path for Linux

const skillsImages = {
    Python: python,
    java: java,
    "C Language": c_lang,
    HTML: html,
    CSS: css,
    JavaScript: js,
    "React JS": react,
    "Node JS": node,
    "Express JS": express,
    MySql: mysql,
    Git: git,
    GitHub: github,
    Linux: linux,
};

const skillsData = [
    { name: 'C Language', percentage: 80 },
    { name: 'Python', percentage: 70 },
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React JS', percentage: 75 },
    { name: 'Node JS', percentage: 70 },
    { name: 'Express JS', percentage: 65 },
    { name: 'MySql', percentage: 75 },
    { name: 'Git', percentage: 80 },
    { name: 'GitHub', percentage: 80 },
    { name: 'Linux', percentage: 70 },
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
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
                                        <img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" style={{ height: "70px", backgroundColor: "white", marginBottom: "10px", borderRadius: "5px", height: "60px", width: "60px", border: "2px solid var(--icons-rev)" }} src={skillsImages[skill.name]} alt={skill.name} />
                                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10" style={{ fontSize: "20px", fontWeight: "500", color: "var(--text)" }}>{skill.name}</div>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: `${skill.percentage}%`, transition: 'width 2s ease-in-out' }}></div>
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
