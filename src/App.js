import React, { useState } from 'react';
import './App.css';
import Content from './components/Main/Content';
import Navbar from './components/Main/Navbar';
import About from './components/views/About/About';
import Footer from './components/Main/Footer';

function App() {
  const [view, setView] = useState(<About />);
  const viewChangeHandler = (page) => {
    setView(page);
  }
  return (
    <div className="app">
      <Navbar onViewChange={viewChangeHandler} />
      <Content page={view}/>
      <Footer />
    </div>
  );
}

export default App;