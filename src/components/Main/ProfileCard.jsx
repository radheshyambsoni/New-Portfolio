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

    return <div className={`${classes["profile-card"]} ${ctx.theme ? classes["profile-card-dark"] : ""}`}>
        <div className={classes["profile-photo-div"]}>
            <div className={`${classes["profile-photo"]} ${ctx.theme ? classes["profile-photo-dark"] : ""}`}>
                <div className={classes["profile-photo-inner"]}>
                    <img src={radhe} alt="" />
                </div>
            </div>
        </div>
        <div className={classes.user}>
            <h2 className={`${classes['user-name']} ${ctx.theme ? classes['user-name-dark'] : ''}`}>Radheshyam Soni</h2>
            <div className={`${classes.username} ${ctx.theme ? classes['username-dark'] : ''}`}>&#64;radheshyambsoni</div>
        </div>
        <hr className={ctx.theme ? classes["hr-dark"] : ""} />
        <div className={classes.socials}>
            <div className={classes.icons}>
                <a href="https://github.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={ctx.theme ? githubicondark : githubiconlight} alt="" /></a>
                <a href="https://linkedin.com/in/radheshyambsoni" target='_blank' rel='noreferrer'><img src={linkedinicon} alt="" /></a>
                <a href="https://instagram.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={instagramicon} alt="" /></a>
                <a href="https://leetcode.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={ctx.theme ? leetcodeicondark : leetcodeiconlight} alt="" /></a>
                <a href="https://facebook.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={facebookicon} alt="" /></a>
                <a href="https://twitter.com/radheshyambsoni" target='_blank' rel='noreferrer'><img src={twittericon} alt="" /></a>
            </div>
        </div>
    </div>
}

export default ProfileCard