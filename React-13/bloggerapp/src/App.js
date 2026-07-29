import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState('All');

  // Conditional Rendering Technique 1: Element Variables with Switch / If-Else
  let activeComponent;
  switch (selectedTab) {
    case 'Books':
      activeComponent = <BookDetails />;
      break;
    case 'Blogs':
      activeComponent = <BlogDetails />;
      break;
    case 'Courses':
      activeComponent = <CourseDetails />;
      break;
    case 'All':
    default:
      activeComponent = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <BookDetails />
          <BlogDetails />
          <CourseDetails />
        </div>
      );
      break;
  }

  return (
    <div className="main-wrapper">
      <header className="app-header">
        <h1 className="app-title">Blogger App Knowledge Portal</h1>
        <p className="app-subtitle">
          Multiple Component Rendering, React Lists, Keys & Conditional Rendering Techniques
        </p>
      </header>

      {/* Navigation Tab Bar */}
      <nav className="tabs-container">
        {['All', 'Books', 'Blogs', 'Courses'].map((tabName) => (
          <button
            key={tabName}
            className={`tab-btn ${selectedTab === tabName ? 'active' : ''}`}
            onClick={() => setSelectedTab(tabName)}
          >
            {tabName === 'All' ? '🌐 View All' : tabName}
          </button>
        ))}
      </nav>

      {/* Render selected component using Element Variable */}
      <main>{activeComponent}</main>
    </div>
  );
}

export default App;
