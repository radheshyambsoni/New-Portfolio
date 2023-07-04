import React from 'react'
import ProfileCard from './ProfileCard';
import classes from './Content.module.css';
import Skills from '../views/Skills/Skills';
import About from '../views/About/About';
import Projects from '../views/Projects/Projects';

const Content = (props) => {
    return <div className={classes.content}>
        <ProfileCard theme={props.theme}/>
        <div className={`${classes.view} ${props.theme ? classes['view-dark'] : ''}`}>
            {props.page===1 && <Projects theme={props.theme}/>}
            {props.page===2 && <Skills theme={props.theme}/>}
            {props.page===3 && <About theme={props.theme}/>}
        </div>
    </div>
}

export default Content;