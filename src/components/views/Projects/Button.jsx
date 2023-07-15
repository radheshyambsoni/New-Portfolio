import React, { useContext } from 'react';
import ThemeContext from '../../../context/theme-context';
import classes from './Button.module.css';

const Button = props => {
    const ctx = useContext(ThemeContext);

    return (
        <a href={props.href} target='_blank' rel='noreferrer' className={`${classes.button} ${ctx.theme ? classes['button-dark'] : ''}`}>
            <div className={classes.img}>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className={`${classes.label} ${ctx.theme ? classes['label-dark'] : ''}`}>{props.label}</div>
        </a>
    );
};

export default Button;