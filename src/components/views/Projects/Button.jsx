import React, { useContext } from 'react';
import ThemeContext from '../../../context/theme-context';
import classes from './Button.module.css';

const Button = props => {
    const ctx = useContext(ThemeContext);

    return (
        <a href={props.href} className={`${classes.button} ${ctx.theme ? classes['button-dark'] : ''}`} target='_blank' rel='noreferrer'>
            <img src={props.img} alt={props.alt} />
            <span className={`${ctx.theme ? classes['label-dark'] : ''}`}>{props.label}</span>
        </a>
    );
};

export default Button;