import React, { useContext } from 'react';
import ThemeContext from '../../../context/theme-context';
import Button from './Button';
import classes from './Project.module.css';
import githubicodark from '../../../assets/icons/github-ico-dark.svg';
import githubicolight from '../../../assets/icons/github-ico-light.svg';
import linkicodark from '../../../assets/icons/link-dark-ico.svg';
import linkicolight from '../../../assets/icons/link-light-ico.svg';

const Project = props => {
    const ctx = useContext(ThemeContext);

    return (
        <div className={classes['project-info']}>
            <div className={classes["project-img"]}>
                <img src={props.pj.img} alt="" />
            </div>
            <div className={classes["pj-content"]}>
                <p>{props.pj.description}</p>
                <div className={classes['btn-grp']}>
                    <Button href={props.pj.repo} img={ctx.theme ? githubicodark : githubicolight} label='Repo' alt='Github icon' theme={ctx.theme} />
                    <Button img={ctx.theme ? linkicolight : linkicodark} label='Link' alt='Link' theme={ctx.theme} />
                </div>
            </div>
        </div>
    );
};

export default Project;