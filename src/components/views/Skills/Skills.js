import React from 'react'
import classes from './Skills.module.css'
import javaico from '../../../img/java-ico.svg';
import htmlico from '../../../img/html-ico.svg';
import cssico from '../../../img/css-ico.svg';
import reactico from '../../../img/react-blue-ico.svg';
import cppico from '../../../img/cpp-ico.svg';
import pythonico from '../../../img/python-ico.svg';
import gitico from '../../../img/git-ico.svg';
import githubico from '../../../img/github-ico.png';
import jsico from '../../../img/javascript-ico.svg';
import mysqlico from '../../../img/mysql-ico.svg';
import androidstudioico from '../../../img/android-studio-ico.svg';

const Skills = () => {
    return <>
        <div className={classes["section-title"]}>
            <div className={classes.title}>Technical Skills</div>
            <div className={classes.divider}></div>
            <div className={classes.title}>Soft Skills</div>
        </div>
        <hr className={classes.hr}/>
        <div className={classes["skills-div"]}>
            <div className={classes["technical-skills-list"]}>
                <div className={classes["skill-container"]}>
                    <img src={javaico} alt="Java" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={htmlico} alt="HTML5" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={cssico} alt="CSS5" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={jsico} alt="" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={reactico} alt="" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={cppico} alt="" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={pythonico} alt="" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={gitico} alt="" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={githubico} alt="" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={mysqlico} alt="" />
                </div>
                <div className={classes["skill-container"]}>
                    <img src={androidstudioico} alt="" />
                </div>
            </div>
            <div className={classes["divider"]}></div>
            <div className={classes["soft-skills-list"]}>
                <div className={classes["skill-container"]}>Goal-Oriented</div>
                <div className={classes["skill-container"]}>Consistency</div>
                <div className={classes["skill-container"]}>Collaboration</div>
                <div className={classes["skill-container"]}>Positivity</div>
                <div className={classes["skill-container"]}>Adaptability</div>
                <div className={classes["skill-container"]}>Problem Solving</div>
                <div className={classes["skill-container"]}>Empathy</div>
                <div className={classes["skill-container"]}>Creativity</div>
                <div className={classes["skill-container"]}>Emotional Intelligence</div>
                <div className={classes["skill-container"]}>Conflict Resolution</div>
                <div className={classes["skill-container"]}>Networking</div>
            </div>
        </div>
    </>
}
export default Skills;