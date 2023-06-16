import React, { useState } from 'react'
import './Navbar.css'
import About from '../views/About/About'
import Projects from '../views/Projects/Projects'
import Skills from '../views/Skills/Skills'

const Navbar = (props) => {
    const [pjclass,setPjclass] = useState("");
    const [skillsclass,setSkillsclass] = useState("");
    const [abtclass,setAbtclass] = useState("selected");
    
    const onProjectsClicked = () =>{
        props.onViewChange(<Projects />);
        setPjclass("selected");
        setSkillsclass("");
        setAbtclass("");
    }
    const onSkillsClicked = () =>{
        props.onViewChange(<Skills />);
        setPjclass("");
        setSkillsclass("selected");
        setAbtclass("");
    }
    const onAboutClicked = () =>{
        props.onViewChange(<About />);
        setPjclass("");
        setSkillsclass("");
        setAbtclass("selected");
    }
    return <div className="navbar">
        {/* <div id="me"><a href="#home">&lt;Radheshyam /&gt;</a></div> */}
        <div className="menu">
            <ul>
                <li>
                    <button className={pjclass} onClick={onProjectsClicked}>Projects</button>
                </li>                
                <li>
                    <button className={skillsclass} onClick={onSkillsClicked}>Skills</button>
                </li>
                <li>
                    <button className={abtclass} onClick={onAboutClicked}>About</button>
                </li>
                <li>
                    <a rel="noreferrer" href="https://drive.google.com/file/d/12ua4B2ktykwoCSIyE5ETORng9NQG3Hr-/view?usp=share_link" target='_blank'><button>Resume</button></a>
                </li>
            </ul>
        </div>
    </div>
}

export default Navbar;