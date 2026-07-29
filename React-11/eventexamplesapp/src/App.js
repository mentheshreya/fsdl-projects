import React from 'react';
import Counter from './Counter';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <header className="main-header">
        <h1 className="main-title">React Event Handling Lab</h1>
        <p className="main-subtitle">SyntheticEvents, Form Submission, Method Arguments & Currency Conversion</p>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <Counter />
        <CurrencyConvertor />
      </main>
    </div>
  );
}

export default App;
