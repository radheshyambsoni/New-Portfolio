import { useState } from 'react'
import classes from './App.module.css'
import Content from './components/Main/Content';
import Navbar from './components/Main/Navbar';
import Footer from './components/Main/Footer'

function App() {
  const [theme, setTheme] = useState(false);
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
