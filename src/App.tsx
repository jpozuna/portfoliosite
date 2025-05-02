import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="content">
        <div className="black-square">
          <div className="square-content">
            <h1 className="name">YOUR NAME</h1>
            <p className="title">SOFTWARE DEVELOPER</p>
          </div>
        </div>
        <nav className="navigation">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </div>
  );
}

export default App;
