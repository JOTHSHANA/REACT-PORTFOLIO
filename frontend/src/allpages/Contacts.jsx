import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contact from '../assets/contact.png'

function Contacts() {
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: userName,
            from_email: userEmail,
            message: message
        };

        emailjs.send(
            'service_kxxew8c',      // Replace with your EmailJS Service ID
            'template_8glokru',      // Replace with your EmailJS Template ID
            templateParams,
            '8IrwQE_OGLFRgedrQ'           // Replace with your EmailJS User ID
        )
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.log('Failed to send the email.', err);
            });

        // Clear the form after submission
        setMessage('');
        setUserName('');
        setUserEmail('');
    };

    return (
        <div className='contact' id='contact'>
            <div className='text-area-skills'>
                <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="5" style={{ fontSize: "18px" }}><b>CONTACT ME</b></p>
                <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="5"><b>__Get In Touch__</b></p>
                <div className='page-content'>
                    <div className='page-contents' data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img className='contact-img shake-animation' src={contact} alt="contact me" data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" />
                        <form className='contact-form' onSubmit={sendEmail} data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <label htmlFor='userName'>Your Name</label>
                            <input
                                type='text'
                                id='userName'
                                placeholder='Your Name'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                            <label htmlFor='userEmail'>Your Email</label>
                            <input
                                type='email'
                                id='userEmail'
                                placeholder='Your Email'
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                required
                            />
                            <label htmlFor='message'>Your Message</label>
                            <textarea
                                id='message'
                                placeholder='Type your message here'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button type='submit'>Send Message</button>
                        </form>
                    </div></div>
            </div>

        </div>
    );
}

export default Contacts;
