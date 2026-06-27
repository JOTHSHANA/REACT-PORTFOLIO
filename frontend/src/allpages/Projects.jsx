import React, { useState } from 'react';
import inventory from '../assets/inventory.png';
import bakery from '../assets/bakery.png';
import files from '../assets/files.png';
import edfn from '../assets/edfn.png';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import inventoryFrame1 from '../assets/inventory/frame1.png';
import inventoryFrame2 from '../assets/inventory/frame2.png';
import inventoryFrame3 from '../assets/inventory/frame3.png';
import inventoryFrame4 from '../assets/inventory/frame4.png';
import inventoryFrame5 from '../assets/inventory/frame5.png';
import inventoryFrame6 from '../assets/inventory/frame6.png';
import inventoryFrame7 from '../assets/inventory/frame7.png';
import inventoryFrame8 from '../assets/inventory/frame8.png';
import bakeryFrame1 from '../assets/bakery/frame1.png';
import bakeryFrame2 from '../assets/bakery/frame2.png';
import bakeryFrame3 from '../assets/bakery/frame3.png';
import bakeryFrame4 from '../assets/bakery/frame4.png';
import bakeryFrame5 from '../assets/bakery/frame5.png';
import bakeryFrame6 from '../assets/bakery/frame6.png';
import bakeryFrame7 from '../assets/bakery/frame7.png';
import bakeryFrame8 from '../assets/bakery/frame8.png';
import bakeryFrame9 from '../assets/bakery/frame9.png';
import bakeryFrame10 from '../assets/bakery/frame10.png';
import bakeryFrame11 from '../assets/bakery/frame11.png';
import filesFrame1 from '../assets/files/frame1.png';
import filesFrame2 from '../assets/files/frame2.png';
import filesFrame3 from '../assets/files/frame3.png';
import filesFrame4 from '../assets/files/frame4.png';
import filesFrame5 from '../assets/files/frame5.png';
import filesFrame6 from '../assets/files/frame6.png';
import filesFrame7 from '../assets/files/frame7.png';
import eLearnFrame1 from '../assets/eLearn/frame1.png';
import eLearnFrame2 from '../assets/eLearn/frame2.png';
import eLearnFrame3 from '../assets/eLearn/frame3.png';
import eLearnFrame4 from '../assets/eLearn/frame4.png';
import eLearnFrame5 from '../assets/eLearn/frame5.png';
import eLearnFrame6 from '../assets/eLearn/frame6.png';
import eLearnFrame7 from '../assets/eLearn/frame7.png';
import eLearnFrame8 from '../assets/eLearn/frame8.png';
import edfn1 from '../assets/edfn/ss1.png';
import edfn2 from '../assets/edfn/ss2.png';
import edfn3 from '../assets/edfn/ss3.png';
import edfn4 from '../assets/edfn/ss4.png';
import edfn5 from '../assets/edfn/ss5.png';
import eLearn from '../assets/eLearn.png';
import { Divider } from '@mui/material';

// ADD OR UPDATE THE "liveLink" PROPERTY HERE AS NEEDED
const projectsData = [
    {
        id: 1,
        title: "E-Learning Platform",
        role: "Frontend Developer (React.js)",
        image: eLearn,
        github: "https://github.com/JOTHSHANA/E-LEARNING-PLATFORM",
        liveLink: "https://techlehren-frontend.onrender.com/",
        screenshots: [
            eLearnFrame1,
            eLearnFrame2,
            eLearnFrame3,
            eLearnFrame4,
            eLearnFrame5,
            eLearnFrame6,
            eLearnFrame7,
            eLearnFrame8
        ]
    },
    {
        id: 2,
        title: "Inventory Management System",
        role: "Full Stack Developer (React, Node.js, MySQL)",
        image: inventory,
        github: "https://github.com/Priyadarshan-B/bestshop_update",
        liveLink: "https://app.bestshopsathy.in/",
        screenshots: [
            inventoryFrame1,
            inventoryFrame2,
            inventoryFrame3,
            inventoryFrame4,
            inventoryFrame5,
            inventoryFrame6,
            inventoryFrame7,
            inventoryFrame8
        ]
    },
    {
        id: 3,
        title: "Company Website",
        role: "Frontend Developer (React.js)",
        image: edfn,
        github: "https://github.com/JOTHSHANA/EDFN-TECHNOLOGIES",
        liveLink: "https://www.edfntechnologies.com/",
        screenshots: [
            edfn1,
            edfn2,
            edfn3,
            edfn4,
            edfn5,
        ]
    },
    {
        id: 4,
        title: "Bakery Billing System",
        role: "Full Stack Developer (MERN Stack)",
        image: bakery,
        github: "https://github.com/JOTHSHANA/Bakery",
        liveLink: "",
        screenshots: [
            bakeryFrame1,
            bakeryFrame2,
            bakeryFrame3,
            bakeryFrame4,
            bakeryFrame5,
            bakeryFrame6,
            bakeryFrame7,
            bakeryFrame8,
            bakeryFrame9,
            bakeryFrame10,
            bakeryFrame11
        ]
    },
    {
        id: 5,
        title: "File Management System",
        role: "Full Stack Developer (React, Node.js, MySQL)",
        image: files,
        github: "https://github.com/JOTHSHANA/ShareMonitor",
        liveLink: "",
        screenshots: [
            filesFrame1,
            filesFrame2,
            filesFrame3,
            filesFrame4,
            filesFrame5,
            filesFrame6,
            filesFrame7
        ]
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [enlargedImage, setEnlargedImage] = useState(null);

    const openPopup = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    const handleEnlarge = (image) => {
        setEnlargedImage(image);
    };

    const closeEnlargePopup = () => {
        setEnlargedImage(null);
    };

    return (
        <div className='projects' id='projects'>
            <div className='text-area-projects'>
                <p data-aos="flip-up" data-aos-duration="700" data-aos-delay="5" style={{ fontSize: "18px" }}><b>MY PROJECTS</b></p>
                <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="5"><b>__What I Did?__</b></p>
                <div className='page-content'>
                    <div className='grid-container'>
                        {projectsData.map((project) => (
                            <div className="box" key={project.id} data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20" onClick={() => openPopup(project)}>
                                <div className='project-image'>
                                    <img className='inventory-img' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="10" src={project.image} alt="project" />
                                </div>
                                <div className='project-info' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="10">
                                    <p className='project-title'>{project.title}</p>
                                    <p className='role'>{project.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedProject && (
                <Dialog open={!!selectedProject} onClose={closePopup} maxWidth="md" fullWidth>
                    <div style={{ backgroundColor: "var(--background)", color: "var(--text)" }}>
                        <DialogTitle>
                            {selectedProject.title}
                            <IconButton
                                aria-label="close"
                                onClick={closePopup}
                                style={{ position: 'absolute', right: 8, top: 8 }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <Divider />
                        <DialogContent>

                            {/* Flex container to keep GitHub and Live Link buttons side by side */}
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View GitHub Repository
                                </Button>

                                {selectedProject.liveLink && (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Live Demo
                                    </Button>
                                )}
                            </div>

                            <div className='screenshots' style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                {selectedProject.screenshots.map((screenshot, index) => (
                                    <div key={index} style={{ position: 'relative', display: 'inline-block' }} className='image-popup'>
                                        <img
                                            src={screenshot}
                                            alt={`Screenshot ${index + 1}`}
                                            style={{ width: '100%', maxWidth: '100%', borderRadius: '5px', boxShadow: "2px 2px 5px" }}
                                        />
                                        <IconButton
                                            style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
                                            onClick={() => handleEnlarge(screenshot)}
                                        >
                                            <ZoomInIcon />
                                        </IconButton>
                                    </div>
                                ))}
                            </div>
                        </DialogContent>
                    </div>
                </Dialog>
            )}

            {enlargedImage && (
                <Dialog open={!!enlargedImage} onClose={closeEnlargePopup} maxWidth="lg">
                    <img
                        src={enlargedImage}
                        alt="Enlarged Screenshot"
                        style={{ width: '100%', borderRadius: '5px' }}
                    />
                </Dialog>
            )}
        </div>
    );
}

export default Projects;