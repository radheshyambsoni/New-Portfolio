import React from 'react';
import classes from './Footer.module.css';
import reactico from '../../img/react-ico-static.png'

const Footer = () => {
    return <div className={classes.footer}>
        <b>&lt;/&gt;</b> &nbsp;and designed with 🖤 by&nbsp;<span id={classes.name}>Radheshyam Soni</span>&nbsp;using&nbsp; <img src={reactico} alt="" />
    </div>
}

export default Footer;