import React from 'react';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">Tech Blog Platform</h1>
        <p className="blog-subtitle">React Lifecycle Hooks Demo (componentDidMount & componentDidCatch)</p>
      </header>

      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;
