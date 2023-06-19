import React from 'react'
import ProfileCard from './ProfileCard';
import classes from './Content.module.css';

const Content = (props) => {
    return <div className={classes.content}>
        <ProfileCard />
        <div className={classes.view}>{props.page}</div>
    </div>
}

export default Content;