import React, { useState } from 'react';
import './App.css';
import Content from './components/Main/Content';
import Navbar from './components/Main/Navbar';
import Footer from './components/Main/Footer';

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
    <div className="app">
      <Navbar onViewChange={viewChangeHandler} onThemeChange={themeChangeHandler}/>
      <Content page={view} theme={theme}/>
      <Footer />
    </div>
  );
}

export default App;