import React from 'react';
import './Footer.css';
import reactico from '../../img/react-ico-static.png'

const Footer = () => {
    return <div className="footer">
        <b>&lt;/&gt;</b> &nbsp;and designed with 🖤 by&nbsp;<span id='name'>Radheshyam Soni</span>&nbsp;using&nbsp; <img src={reactico} alt="" />
    </div>
}

export default Footer;