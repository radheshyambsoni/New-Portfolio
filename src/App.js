import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import About from './components/views/About';

function App() {
  const [view, setView] = useState(<About />);
  const onViewChangeHandler = (page) => {
    setView(page);
  }
  return (
    <div className="app">
      <Navbar onViewChange={onViewChangeHandler} />
      <Content page={view}/>
    </div>
  );
}

export default App;
