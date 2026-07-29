import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import NotificationBanner from './NotificationBanner';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const flightsData = [
    { id: 101, airline: 'Air India', flightNo: 'AI-202', origin: 'Mumbai (BOM)', destination: 'Delhi (DEL)', time: '08:30 AM', price: 5499 },
    { id: 102, airline: 'IndiGo', flightNo: '6E-415', origin: 'Bengaluru (BLR)', destination: 'Goa (GOI)', time: '11:15 AM', price: 3299 },
    { id: 103, airline: 'Vistara', flightNo: 'UK-812', origin: 'Delhi (DEL)', destination: 'Bengaluru (BLR)', time: '02:45 PM', price: 6890 },
    { id: 104, airline: 'SpiceJet', flightNo: 'SG-704', origin: 'Chennai (MAA)', destination: 'Kolkata (CCU)', time: '06:20 PM', price: 4150 }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Element Variable Conditional Rendering
  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage flights={flightsData} username="John Doe" />;
  } else {
    pageContent = <GuestPage flights={flightsData} onLoginClick={handleLogin} />;
  }

  return (
    <div className="app-container">
      {/* Component rendered conditionally (returns null if showBanner is false) */}
      <NotificationBanner
        show={showBanner}
        message="Special Summer Sale! Log in now to unlock exclusive 15% discount on all domestic flights."
        onClose={() => setShowBanner(false)}
      />

      <header className="nav-header">
        <div className="brand-logo">
          <div className="brand-icon">✈️</div>
          <span className="brand-name">SkyWings Airlines</span>
        </div>

        <div className="auth-badge">
          <span className="user-status">
            Status: <strong>{isLoggedIn ? 'Logged In (Member)' : 'Guest User'}</strong>
          </span>

          {/* Conditional Rendering of Login vs Logout buttons */}
          {isLoggedIn ? (
            <button className="btn-auth btn-logout" onClick={handleLogout}>
              Logout 🔒
            </button>
          ) : (
            <button className="btn-auth btn-login" onClick={handleLogin}>
              Login 🔑
            </button>
          )}
        </div>
      </header>

      <main>{pageContent}</main>
    </div>
  );
}

export default App;
