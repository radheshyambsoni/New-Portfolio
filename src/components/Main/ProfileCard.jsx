import React, { useContext } from 'react'
import classes from './ProfileCard.module.css'
import radhe from '../../assets/img/radhe.jpg'
import githubiconlight from '../../assets/icons/github-ico-light.svg'
import githubicondark from '../../assets/icons/github-ico-dark.svg'
import instagramicon from '../../assets/icons/instagram-ico.svg'
import linkedinicon from '../../assets/icons/linkedin-ico.svg'
import leetcodeiconlight from '../../assets/icons/leetcode-ico-light.svg'
import leetcodeicondark from '../../assets/icons/leetcode-ico-dark.svg'
import facebookicon from '../../assets/icons/facebook-ico.svg'
import twittericon from '../../assets/icons/twitter-ico.svg'
import ThemeContext from '../../context/theme-context'

const ProfileCard = () => {
    const ctx = useContext(ThemeContext);

    const cardClasses = `${classes["profile-card"]} ${ctx.theme ? classes["profile-card-dark"] : ""}`;
    const photoClasses = `${classes["profile-photo"]} ${ctx.theme ? classes["profile-photo-dark"] : ""}`;
    const nameClasses = `${classes.name} ${ctx.theme ? classes['name-dark'] : ''}`;

    return (
        <div className={cardClasses}>
            <div className={photoClasses}>
                <img src={radhe} alt="" />
            </div>
            <div className={nameClasses}>
                <h2>Radheshyam Soni</h2>
                <p>&#64;radheshyambsoni</p>
            </div>
            <hr className={ctx.theme ? classes["hr-dark"] : ""} />
            <div className={classes.socialicons}>
                <a href="https://github.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={ctx.theme ? githubicondark : githubiconlight} alt="" /></a>
                <a href="https://linkedin.com/in/radheshyambsoni" target='_blank' rel='noreferrer'><img src={linkedinicon} alt="" /></a>
                <a href="https://instagram.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={instagramicon} alt="" /></a>
                <a href="https://leetcode.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={ctx.theme ? leetcodeicondark : leetcodeiconlight} alt="" /></a>
                <a href="https://facebook.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={facebookicon} alt="" /></a>
                <a href="https://twitter.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={twittericon} alt="" /></a>
            </div>
        </div>
    )
}

export default ProfileCard