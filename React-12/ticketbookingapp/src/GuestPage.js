import React from 'react';

function GuestPage({ flights, onLoginClick }) {
  return (
    <div className="page-panel">
      <h2 className="page-title guest-title">✈️ Browse Flight Schedule (Guest View)</h2>
      <p className="page-description">
        Welcome Guest! Browse real-time available flights below. Please log in to book your tickets.
      </p>

      <div className="flights-grid">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <div className="flight-header">
              <span className="airline-name">{flight.airline}</span>
              <span className="flight-number">{flight.flightNo}</span>
            </div>
            <div className="route-info">
              <span>{flight.origin}</span>
              <span>➔</span>
              <span>{flight.destination}</span>
            </div>
            <div>Time: <strong>{flight.time}</strong></div>
            <div className="flight-price">₹{flight.price.toLocaleString()}</div>
          </div>
        ))}
      </div>

      <div className="guest-notice">
        🔒 Ticket booking is restricted to registered members. Please click <strong>Login</strong> at the top to book flights.
      </div>
    </div>
  );
}

export default GuestPage;
