import React from 'react';
import './About.css';

const About = () => {
    return <div className='about'>
        <div className="userinfo">
            <h2 className='my-heading-typing'>Welcome to&nbsp;<span className='my-name'>Radheshyam's</span>&nbsp;Portfolio</h2>            
            <div className='my-info'>
                As a computer science engineering student, I am passionate about technology and its ability to solve complex problems. Through my academic coursework and personal projects, I have gained experience in various programming languages and software development tools. This portfolio showcases my skills and demonstrates my ability to tackle real-world challenges with creativity and innovation.
            </div>
        </div>
        <div className="divider"></div>
        <div className="contact">
            <h2>Contact</h2>
            <ul className='contact-items'>
                <li>📧 geekyradhe11@gmail.com</li>
                <li>📧 radheshyambsoni@gmail.com</li>
                <li>📞 +91 9921357773</li>
                <li>📞 +91 9921857773</li>
            </ul>
        </div>
    </div>
}

export default About;