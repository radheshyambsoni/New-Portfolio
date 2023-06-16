import React from 'react';
import classes from './Project.module.css'
import githubico from '../../../img/github-ico.png'
import linkico from '../../../img/link-ico.png'
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
                    <Button href={props.repo} img={githubico} name='Repo' alt='Github icon' />
                    <Button img={linkico} name='Link' alt='Link' />
                </div>
            </div>
        </div>
    );
};

export default Project;