import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    return (
        <a href={props.href} target='_blank' rel='noreferrer' className={classes.button}>
            <div className={classes.img}>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className={classes.name}>{props.name}</div>
        </a>
    );
};

export default Button;