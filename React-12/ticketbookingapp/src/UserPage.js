import React, { useState } from 'react';

function UserPage({ flights, username }) {
  const [bookedFlights, setBookedFlights] = useState([]);

  const handleBook = (flight) => {
    if (bookedFlights.some((b) => b.id === flight.id)) {
      alert(`Flight ${flight.flightNo} is already booked!`);
      return;
    }
    setBookedFlights([...bookedFlights, flight]);
    alert(`Successfully booked ticket for ${flight.airline} (${flight.flightNo})!`);
  };

  return (
    <div className="page-panel">
      <h2 className="page-title user-title">🎟️ Member Flight Booking Portal</h2>
      <p className="page-description">
        Hello <strong>{username}</strong>! Select a flight below to book your ticket instantly.
      </p>

      <div className="flights-grid">
        {flights.map((flight) => {
          const isBooked = bookedFlights.some((b) => b.id === flight.id);
          return (
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
              
              <button
                className="btn-book"
                style={{
                  background: isBooked ? '#10b981' : '',
                  cursor: isBooked ? 'default' : 'pointer'
                }}
                onClick={() => handleBook(flight)}
                disabled={isBooked}
              >
                {isBooked ? '✓ Ticket Booked' : '🎫 Book Ticket Now'}
              </button>
            </div>
          );
        })}
      </div>

      {bookedFlights.length > 0 && (
        <div style={{ marginTop: '2.5rem' }}>
          <h3 style={{ color: '#a5f3fc', marginBottom: '1rem' }}>📋 Your Confirmed Bookings ({bookedFlights.length})</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {bookedFlights.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '1rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '12px',
                  display: 'flex',
                  justify-content: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span><strong>{item.airline}</strong> ({item.flightNo}): {item.origin} to {item.destination} at {item.time}</span>
                <span style={{ color: '#34d399', fontWeight: '700' }}>Confirmed (₹{item.price.toLocaleString()})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserPage;
