import React from 'react'
import './Skills.css'
import javaico from '../../img/java-ico.svg';
import htmlico from '../../img/html-ico.svg';
import cssico from '../../img/css-ico.svg';
import reactico from '../../img/react-blue-ico.svg';
import cppico from '../../img/cpp-ico.svg';
import pythonico from '../../img/python-ico.svg';
import gitico from '../../img/git-ico.svg';
import jsico from '../../img/javascript-ico.svg';
import mysqlico from '../../img/mysql-ico.svg';

const Skills = () => {
    return <div className="skills">
        <div className="section-title">
            <div className='title'>Technical Skills</div>
            <div className="divider"></div>
            <div className='title'>Soft Skills</div>
        </div>
        <hr />
        <div className="skills-div">
            <div className="technical-skills-list">
                <div className="skill-container">
                    <img src={javaico} alt="Java" />
                </div>
                <div className="skill-container">
                    <img src={htmlico} alt="HTML5" />
                </div>
                <div className="skill-container">
                    <img src={cssico} alt="CSS5" />
                </div>
                <div className="skill-container">
                    <img src={jsico} alt="" />
                </div>
                <div className="skill-container">
                    <img src={reactico} alt="" />
                </div>
                <div className="skill-container">
                    <img src={cppico} alt="" />
                </div>
                <div className="skill-container">
                    <img src={pythonico} alt="" />
                </div>
                <div className="skill-container">
                    <img src={gitico} alt="" />
                </div>
                <div className="skill-container">
                    <img src={mysqlico} alt="" />
                </div>
            </div>
            <div className="divider"></div>
            <div className="soft-skills-list">
                <div className="skill-container">Java</div>
                <div className="skill-container">HTML</div>
                <div className="skill-container">CSS</div>
                <div className="skill-container">JavaScript</div>
                <div className="skill-container">React</div>
                <div className="skill-container">C++</div>
                <div className="skill-container">Python</div>
                <div className="skill-container">Git</div>
                <div className="skill-container">MySQL</div>
                <div className="skill-container">Android Studio</div>
            </div>
        </div>
    </div>
}
export default Skills;