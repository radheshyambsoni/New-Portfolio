import React from 'react'
import './Navbar.css'
import About from './views/About'
import Projects from './views/Projects'
import Skills from './views/Skills'
import Contact from './views/Contact'

const Navbar = (props) => {
    // const [view,setView] = useState(<About />);    
    const onProjectsClicked = () =>{
        props.onViewChange(<Projects />);
    }
    const onSkillsClicked = () =>{
        props.onViewChange(<Skills />);
    }
    const onContactClicked = () =>{
        props.onViewChange(<Contact />);
    }
    const onAboutClicked = () =>{
        props.onViewChange(<About />);
    }
    return <div className="navbar">
        {/* <div id="me"><a href="#home">&lt;Radheshyam /&gt;</a></div> */}
        <div className="menu">
            <ul>
                <li>
                    <button onClick={onProjectsClicked}>Projects</button>
                </li>
                <li>
                    <button onClick={onSkillsClicked}>Skills</button>
                </li>
                <li>
                    <button onClick={onContactClicked}>Contact</button>
                </li>
                <li>
                    <button onClick={onAboutClicked}>About</button>
                </li>
                <li>
                    <a rel="noreferrer" href="https://drive.google.com/file/d/12ua4B2ktykwoCSIyE5ETORng9NQG3Hr-/view?usp=share_link" target='_blank'><button>Resume</button></a>
                </li>
            </ul>
        </div>
    </div>
}

export default Navbar;