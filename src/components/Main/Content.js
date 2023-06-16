import React from 'react'
import ProfileCard from './ProfileCard';
import './Content.css'
import View from './View';

const Content = (props) => {
    return <div className="content">
        <ProfileCard />
        <View page={props.page}/>
    </div>
}

export default Content;