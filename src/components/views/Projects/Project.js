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
                <img src={props.img} alt="" />
            </div>
            <div className={classes["pj-content"]}>
                <div className={classes["project-description"]}>{props.description}</div>
                <div className={classes['btn-grp']}>
                    <Button href={props.repo} img={props.theme ? githubicodark : githubicolight} name='Repo' alt='Github icon' />
                    <Button img={props.theme ? linkicolight : linkicodark} name='Link' alt='Link' />
                </div>
            </div>
        </div>
    );
};

export default Project;