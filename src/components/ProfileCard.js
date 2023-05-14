import React from 'react';
import './ProfileCard.css';
import radhe from '../img/radhe.jpg';

const ProfileCard = () => {
    return <div className="profile-card">
        <div className="profile-photo">
            <div className="profile-photo-inner">
                <img src={radhe} alt="" />
            </div>
        </div>
        <div className="user-name">
            <h2>Radheshyam Soni</h2>
        </div>
        <div className="username">&#64;radheshyambsoni</div>
        <div className="socials">
            <ul>
                <li><a href="https://github.com/radheshyambsoni"><img src="" alt="" /></a></li>
                <li><a href="https://linkedin.com/in/radheshyambsoni"><img src="" alt="" /></a></li>
                <li><a href="https://instagram.com/radheshyambsoni"><img src="" alt="" /></a></li>
                <li><a href="https://facebook.com/radheshyambsoni"><img src="" alt="" /></a></li>
            </ul>
        </div>
    </div>
}

export default ProfileCard;