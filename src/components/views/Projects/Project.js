import React from 'react';
import classes from './Project.module.css';
import githubicodark from '../../../assets/icons/github-ico-dark.svg';
import githubicolight from '../../../assets/icons/github-ico-light.svg';
import linkicodark from '../../../assets/icons/link-dark-ico.svg';
import linkicolight from '../../../assets/icons/link-light-ico.svg';
import Button from './Button';

const Project = props => {
    return (
        <div className={classes['project-info']}>
            <div className={classes["project-img"]}>
                <img src={props.pj.img} alt="" />
            </div>
            <div className={classes["pj-content"]}>
                <div className={classes["project-description"]}>{props.pj.description}</div>
                <div className={classes['btn-grp']}>
                    <Button href={props.pj.repo} img={props.theme ? githubicodark : githubicolight} label='Repo' alt='Github icon' theme={props.theme}/>
                    <Button img={props.theme ? linkicolight : linkicodark} label='Link' alt='Link' theme={props.theme}/>
                </div>
            </div>
        </div>
    );
};

export default Project;