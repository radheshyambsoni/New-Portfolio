import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return <div className="navbar">
        {/* <div id="me"><a href="#home">&lt;Radheshyam /&gt;</a></div> */}
        <div className="menu">
            <ul>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a rel="noreferrer" href="https://drive.google.com/file/d/12ua4B2ktykwoCSIyE5ETORng9NQG3Hr-/view?usp=share_link" target='_blank'>Resume</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
            </ul>
        </div>
    </div>
}

export default Navbar;