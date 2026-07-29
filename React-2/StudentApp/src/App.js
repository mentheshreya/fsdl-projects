import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <header className="portal-header">
        <h1 className="portal-title">Student Management Portal</h1>
        <p className="portal-subtitle">React Components Demonstration (Class & Function Components)</p>
      </header>

      <main className="components-container">
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
