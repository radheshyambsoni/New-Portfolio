import React, { useContext } from 'react'
import classes from './Skills.module.css'
import javaico from '../../../assets/icons/java-ico.svg';
import htmlico from '../../../assets/icons/html-ico.svg';
import cssico from '../../../assets/icons/css-ico.svg';
import reactico from '../../../assets/icons/react-blue-ico.svg';
import cppico from '../../../assets/icons/cpp-ico.svg';
import pythonico from '../../../assets/icons/python-ico.svg';
import gitico from '../../../assets/icons/git-ico.svg';
import githubicodark from '../../../assets/icons/github-ico-dark.svg';
import githubicolight from '../../../assets/icons/github-ico-light.svg';
import jsico from '../../../assets/icons/javascript-ico.svg';
import mysqlico from '../../../assets/icons/mysql-ico.svg';
import androidstudioico from '../../../assets/icons/android-studio-ico.svg';
import ThemeContext from '../../../context/theme-context';

const Skills = () => {
    const ctx = useContext(ThemeContext);

    return <>
        <div className={classes["section-title"]}>
            <div className={`${classes.title} ${ctx.theme ? classes['title-dark'] : ''}`}>Technical Skills</div>
            <div className={`${classes.divider} ${ctx.theme ? classes['divider-dark'] : ''}`}></div>
            <div className={classes.title}>Soft Skills</div>
        </div>
        <hr className={`${classes.hr} ${ctx.theme ? classes['hr-dark'] : ''}`} />
        <div className={classes["skills-div"]}>
            <ul className={classes["skills-list"]}>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={javaico} alt="Java" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={htmlico} alt="HTML5" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={cssico} alt="CSS5" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={jsico} alt="" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={reactico} alt="" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={cppico} alt="" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={pythonico} alt="" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={gitico} alt="" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={ctx.theme ? githubicodark : githubicolight} alt="" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={mysqlico} alt="" />
                </li>
                <li className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>
                    <img src={androidstudioico} alt="" />
                </li>
            </ul>
            <div className={`${classes.divider} ${ctx.theme ? classes['divider-dark'] : ''}`}></div>
            <div className={classes["skills-list"]}>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Goal-Oriented</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Consistency</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Collaboration</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Positivity</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Adaptability</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Problem Solving</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Empathy</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Creativity</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Emotional Intelligence</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Conflict Resolution</div>
                <div className={`${classes["skill-container"]} ${ctx.theme ? classes['skill-container-dark'] : ''}`}>Networking</div>
            </div>
        </div>
    </>
}
export default Skills;