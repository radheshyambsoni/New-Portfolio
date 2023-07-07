import React from 'react'
import classes from './About.module.css'

let myInfo = "I am a passionate computer science engineering student with expertise in multiple programming languages and software development tools. I consistently solve Data Structures and Algorithms (DSA) problems to enhance my analytical thinking and algorithmic design skills. My portfolio demonstrates my proficiency and diverse project experience. I have a strong understanding of fundamental data structures and advanced algorithms, prioritizing code efficiency and optimization. Through my commitment to DSA problem-solving, I approach challenges creatively, aiming to contribute to groundbreaking advancements in computer science.";

const About = (props) => {
    return <>
        <div className={classes.header}>
            <h2 className={classes['my-heading-typing']}>Welcome 👋 to&nbsp;<span className={classes['my-name']}>Radheshyam's</span>&nbsp;Portfolio</h2>
        </div>
        <div className={classes['rest']}>
            <div className={classes['about-me']}>
                <div className={classes.title}>About Me 🤵</div>
                <div className={`${classes['my-info']} ${props.theme ? classes['my-info-dark'] : ''}`}>{myInfo}</div>
            </div>

            <div className={`${classes.divider} ${props.theme ? classes['divider-dark'] : ''}`}></div>

            <div className={classes.contact}>
                <h2>Contact Me 👇</h2>
                <ul>
                    <li>📧 geekyradhe11@gmail.com</li>
                    <li>📧 radheshyambsoni@gmail.com</li>
                    <li>📞 +91 9921357773</li>
                </ul>
            </div>
        </div>
    </>
}

export default About