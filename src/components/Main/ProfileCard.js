import React from 'react';
import './ProfileCard.css';
import radhe from '../../img/radhe.jpg';
import githubicon from '../../img/github-ico.png';
import instagramicon from '../../img/instagram-ico.png';
import linkedinicon from '../../img/linkedin-ico.png';
import leetcodeicon from '../../img/leetcode-ico.png';
import facebookicon from '../../img/facebook-ico.png';
import twittericon from '../../img/twitter-ico.png';

const ProfileCard = () => {
    return <div className="profile-card">
        <div className="profile-photo-div">
            <div className="profile-photo">
                <div className="profile-photo-inner">
                    <img src={radhe} alt="" />
                </div>
            </div>
        </div>
        <div className="user">
            <h2 className='user-name'>Radheshyam Soni</h2>
            <div className="username">&#64;radheshyambsoni</div>
        </div>
        <hr />
        <div className="socials">
            <div className='icons'>
                <a href="https://github.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={githubicon} alt="" /></a>
                <a href="https://linkedin.com/in/radheshyambsoni" target='_blank' rel='noreferrer'><img src={linkedinicon} alt="" /></a>
                <a href="https://instagram.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={instagramicon} alt="" /></a>
                <a href="https://leetcode.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={leetcodeicon} alt="" /></a>
                <a href="https://facebook.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={facebookicon} alt="" /></a>
                <a href="https://twitter.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={twittericon} alt="" /></a>
            </div>
        </div>
    </div>
}

export default ProfileCard;