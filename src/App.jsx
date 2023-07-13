import { useState } from 'react'
import classes from './App.module.css'
import Content from './components/Main/Content';
import Navbar from './components/Main/Navbar';
import Footer from './components/Main/Footer'

function App() {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(getCurrentTheme);
  const themeChangeHandler = (theme) => {
    setTheme(theme);
  }
  
  const [view, setView] = useState(3);
  const viewChangeHandler = (page) => {
    setView(page);
  }

  return (
    <div className={`${classes.app} ${theme ? classes['app-dark'] : ''} `}>
      <Navbar onViewChange={viewChangeHandler} onThemeChange={themeChangeHandler}/>
      <Content page={view} theme={theme}/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App
