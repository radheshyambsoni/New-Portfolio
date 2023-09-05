import React, { useContext } from 'react'
import classes from './Footer.module.css'
import reactico from '../../assets/icons/react-ico-white.svg'
import ThemeContext from '../../context/theme-context'

const Footer = () => {
    const ctx = useContext(ThemeContext);

    const footerClass = `${classes.footer} ${ctx.theme ? classes['footer-dark'] : ''}`;
    return <div className={footerClass}>
        <b>&lt;/&gt;</b> &nbsp;and designed with 🖤 by&nbsp;<span id={classes.name}>Radheshyam Soni</span>&nbsp;using&nbsp; <img src={reactico} alt="" />
    </div>
}

export default Footer