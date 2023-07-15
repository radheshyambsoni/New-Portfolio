import React, { useContext, useState } from 'react'
import ThemeContext from '../../context/theme-context'
import classes from './Navbar.module.css'
import darkModeIco from '../../assets/icons/dark-mode-ico.svg'
import lightModeIco from '../../assets/icons/light-mode-ico.svg'

const Navbar = (props) => {
    const [selected, setSelected] = useState(3);

    const ctx = useContext(ThemeContext);

    const viewChangeHandler = view => {
        props.onViewChange(view);
        setSelected(view);
    };

    return <div className={`${classes.navbar} ${ctx.theme ? classes['navbar-dark'] : ''}`}>
        <div className={classes.menu}>
            <ul>
                <li>
                    <button className={`${classes['nav-btn']} ${ctx.theme ? classes['nav-btn-dark'] : ''} ${selected === 1 ? ctx.theme ? classes['selected-dark'] : classes.selected : ""}`} onClick={() => { viewChangeHandler(1) }}>Projects</button>
                </li>
                <li>
                    <button className={`${classes['nav-btn']} ${ctx.theme ? classes['nav-btn-dark'] : ''} ${selected === 2 ? ctx.theme ? classes['selected-dark'] : classes.selected : ""}`} onClick={() => { viewChangeHandler(2) }}>Skills</button>
                </li>
                <li>
                    <button className={`${classes['nav-btn']} ${ctx.theme ? classes['nav-btn-dark'] : ''} ${selected === 3 ? ctx.theme ? classes['selected-dark'] : classes.selected : ""}`} onClick={() => { viewChangeHandler(3) }}>About</button>
                </li>
                <li>
                    <button className={`${classes['nav-btn']} ${ctx.theme ? classes['nav-btn-dark'] : ''}`} ><a className={`${classes.link} ${ctx.theme ? classes['link-dark'] : ''}`} rel="noreferrer" href="https://drive.google.com/file/d/12ua4B2ktykwoCSIyE5ETORng9NQG3Hr-/view?usp=share_link" target='_blank'>Resume</a></button>
                </li>
            </ul>
        </div>
        <div className={classes['theme-btn']}>
            <button onClick={ctx.themeChangeHandler}>
                <img src={ctx.theme ? lightModeIco : darkModeIco} alt="" />
            </button>
        </div>
    </div>
}

export default Navbar