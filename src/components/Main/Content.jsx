import React, { useContext } from 'react'
import ProfileCard from './ProfileCard'
import classes from './Content.module.css'
import Skills from '../views/Skills/Skills'
import About from '../views/About/About'
import Projects from '../views/Projects/Projects'
import ThemeContext from '../../context/theme-context'

const Content = (props) => {
    const ctx = useContext(ThemeContext);

    return <main className={classes.content}>
        <ProfileCard />
        <div className={`${classes.view} ${ctx.theme ? classes['view-dark'] : ''}`}>
            {props.page === 1 && <Projects />}
            {props.page === 2 && <Skills />}
            {props.page === 3 && <About />}
        </div>
    </main>
}

export default Content