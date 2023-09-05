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

    const navClass = `${classes.navbar} ${ctx.theme ? classes['navbar-dark'] : ''}`;
    const menuClass = `${classes['nav-btn']} ${ctx.theme ? classes['nav-btn-dark'] : ''}`;
    const selectedClass = `${ctx.theme ? classes['selected-dark'] : classes.selected}`;

    return <nav className={navClass}>
        <ul>
            <li>
                <button className={`${menuClass} ${selected === 1 ? selectedClass : ""}`} onClick={() => { viewChangeHandler(1) }}>Projects</button>
            </li>
            <li>
                <button className={`${menuClass} ${selected === 2 ? selectedClass : ""}`} onClick={() => { viewChangeHandler(2) }}>Skills</button>
            </li>
            <li>
                <button className={`${menuClass} ${selected === 3 ? selectedClass : ""}`} onClick={() => { viewChangeHandler(3) }}>About</button>
            </li>
            <li>
                <button className={`${menuClass}`} ><a className={`${classes.link} ${ctx.theme ? classes['link-dark'] : ''}`} rel="noreferrer" href="https://drive.google.com/file/d/12ua4B2ktykwoCSIyE5ETORng9NQG3Hr-/view?usp=share_link" target='_blank'>Resume</a></button>
            </li>
            <li className={classes['theme-btn']}>
                <button onClick={ctx.themeChangeHandler}>
                    <img src={ctx.theme ? lightModeIco : darkModeIco} alt="" />
                </button>
            </li>
        </ul>
    </nav>
}

export default Navbar