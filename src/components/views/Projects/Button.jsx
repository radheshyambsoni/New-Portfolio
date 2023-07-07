import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    return (
        <a href={props.href} target='_blank' rel='noreferrer' className={`${classes.button} ${props.theme ? classes['button-dark'] : ''}`}>
            <div className={classes.img}>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className={`${classes.label} ${props.theme ? classes['label-dark'] : ''}`}>{props.label}</div>
        </a>
    );
};

export default Button;