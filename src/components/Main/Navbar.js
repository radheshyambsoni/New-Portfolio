import React, { useState } from 'react'
import classes from './Navbar.module.css'
import About from '../views/About/About'
import Projects from '../views/Projects/Projects'
import Skills from '../views/Skills/Skills'

const Navbar = (props) => {
    const [pjclass,setPjclass] = useState(false);
    const [skillsclass,setSkillsclass] = useState(false);
    const [abtclass,setAbtclass] = useState(true);
    
    const onProjectsClicked = () =>{
        props.onViewChange(<Projects />);
        setPjclass(true);
        setSkillsclass(false);
        setAbtclass(false);
    }
    const onSkillsClicked = () =>{
        props.onViewChange(<Skills />);
        setPjclass(false);
        setSkillsclass(true);
        setAbtclass(false);
    }
    const onAboutClicked = () =>{
        props.onViewChange(<About />);
        setPjclass(false);
        setSkillsclass(false);
        setAbtclass(true);
    }
    return <div className={classes.navbar}>
        <div className={classes.menu}>
            <ul>
                <li><button className={pjclass ? classes.selected : ""} onClick={onProjectsClicked}>Projects</button></li>
                <li><button className={skillsclass ? classes.selected : ""} onClick={onSkillsClicked}>Skills</button></li>
                <li><button className={abtclass ? classes.selected : ""} onClick={onAboutClicked}>About</button></li>
                <li><a rel="noreferrer" href="https://drive.google.com/file/d/12ua4B2ktykwoCSIyE5ETORng9NQG3Hr-/view?usp=share_link" target='_blank'><button>Resume</button></a></li>
            </ul>
        </div>
    </div>
}

export default Navbar;