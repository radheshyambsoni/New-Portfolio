import React from 'react';
import './About.css';

const About = () => {
    return <div className='about'>
        <div className="userinfo">
            <h2 className='my-heading'>HELLO THERE! THIS IS RADHESHYAM SONI</h2>
            <div className='my-info'>
                As a computer science engineering student, I am passionate about technology and its ability to solve complex problems. Through my academic coursework and personal projects, I have gained experience in various programming languages and software development tools. This portfolio showcases my skills and demonstrates my ability to tackle real-world challenges with creativity and innovation.
            </div>
        </div>
        <div className="divider"></div>
        <div className="skills">
            <h3>Technical Skills</h3>
            <div className='technical-skill-list'>
            <div className="skill-container">Java</div>
            <div className="skill-container">HTML</div>
            <div className="skill-container">CSS</div>
            <div className="skill-container">JavaScript</div>
            <div className="skill-container">React</div>
            <div className="skill-container">C++</div>
            <div className="skill-container">Python</div>
            <div className="skill-container">Git</div>
            <div className="skill-container">MySQL</div>
            <div className="skill-container">Android Studio</div>
            </div>
        </div>
    </div>
}

export default About;