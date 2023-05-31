import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import About from './components/views/About';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState(<About />);
  const onViewChangeHandler = (page) => {
    setView(page);
  }
  return (
    <div className="app">
      <Navbar onViewChange={onViewChangeHandler} />
      <Content page={view}/>
      <Footer />
    </div>
  );
}

export default App;
