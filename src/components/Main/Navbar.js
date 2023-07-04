import React, { useState } from 'react';
import classes from './Navbar.module.css';
import darkModeIco from '../../img/dark-mode-ico.svg';
import lightModeIco from '../../img/light-mode-ico.svg';

const Navbar = (props) => {
    const [pjclass,setPjclass] = useState(false);
    const [skillsclass,setSkillsclass] = useState(false);
    const [abtclass,setAbtclass] = useState(true);
    const [theme, setTheme] = useState(false);
    
    const onProjectsClicked = () =>{
        props.onViewChange(1);
        setPjclass(true);
        setSkillsclass(false);
        setAbtclass(false);
    }
    const onSkillsClicked = () =>{
        props.onViewChange(2);
        setPjclass(false);
        setSkillsclass(true);
        setAbtclass(false);
    }
    const onAboutClicked = () =>{
        props.onViewChange(3);
        setPjclass(false);
        setSkillsclass(false);
        setAbtclass(true);
    }

    const themeChangeHandler = () => {
        props.onThemeChange(!theme)
        setTheme((theme) => !theme);
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
        <div className={classes['theme-btn']}>
            <button onClick={themeChangeHandler}>
                <img src={theme ? lightModeIco : darkModeIco} alt="" />
            </button>
        </div>
    </div>
}

export default Navbar;