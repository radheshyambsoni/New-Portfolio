import React, { useState } from 'react'
import classes from './Navbar.module.css'
import darkModeIco from '../../assets/icons/dark-mode-ico.svg'
import lightModeIco from '../../assets/icons/light-mode-ico.svg'

const Navbar = (props) => {
    const [selected,setSelected] = useState(3);
    const [theme, setTheme] = useState(false);
    
    const onProjectsClicked = () =>{
        props.onViewChange(1);
        setSelected(1);
    }
    const onSkillsClicked = () =>{
        props.onViewChange(2);
        setSelected(2);
    }
    const onAboutClicked = () =>{
        props.onViewChange(3);
        setSelected(3);
    }

    const themeChangeHandler = () => {
        props.onThemeChange(!theme)
        setTheme((theme) => !theme);
    }
    
    return <div className={`${classes.navbar} ${theme ? classes['navbar-dark'] : ''}`}>
        <div className={classes.menu}>
            <ul>
                <li>
                    <button className={`${classes['nav-btn']} ${theme ? classes['nav-btn-dark'] : ''} ${selected===1 ? theme ? classes['selected-dark'] : classes.selected : ""}`} onClick={onProjectsClicked}>Projects</button>
                </li>
                <li>
                    <button className={`${classes['nav-btn']} ${theme ? classes['nav-btn-dark'] : ''} ${selected===2 ? theme ? classes['selected-dark'] : classes.selected : ""}`} onClick={onSkillsClicked}>Skills</button>
                </li>
                <li>
                    <button className={`${classes['nav-btn']} ${theme ? classes['nav-btn-dark'] : ''} ${selected===3 ? theme ? classes['selected-dark'] : classes.selected : ""}`} onClick={onAboutClicked}>About</button>
                </li>
                <li>
                    <button className={`${classes['nav-btn']} ${theme ? classes['nav-btn-dark'] : ''}`} ><a className={`${classes.link} ${theme ? classes['link-dark'] : ''}`} rel="noreferrer" href="https://drive.google.com/file/d/12ua4B2ktykwoCSIyE5ETORng9NQG3Hr-/view?usp=share_link" target='_blank'>Resume</a></button>
                </li>
            </ul>
        </div>
        <div className={classes['theme-btn']}>
            <button onClick={themeChangeHandler}>
                <img src={theme ? lightModeIco : darkModeIco} alt="" />
            </button>
        </div>
    </div>
}

export default Navbar