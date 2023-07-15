import { useContext, useState } from 'react'
import classes from './App.module.css'
import Content from './components/Main/Content';
import Navbar from './components/Main/Navbar';
import Footer from './components/Main/Footer'
import ThemeContext from './context/theme-context';

function App() {
  const ctx = useContext(ThemeContext);

  const [view, setView] = useState(3);
  const viewChangeHandler = (page) => {
    setView(page);
  }

  return (
    <div className={`${classes.app} ${ctx.theme ? classes['app-dark'] : ''} `}>
      <Navbar onViewChange={viewChangeHandler} />
      <Content page={view}/>
      <Footer />
    </div>
  )
}

export default App
