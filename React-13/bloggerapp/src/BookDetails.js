import React, { useState } from 'react';

function BookDetails() {
  const [showDiscount, setShowDiscount] = useState(true);

  const books = [
    { id: 'b1', title: 'React Design Patterns', author: 'Dan Abramov', price: 49.99, rating: 4.9, isFeatured: true },
    { id: 'b2', title: 'Clean Architecture in JS', author: 'Robert C. Martin', price: 39.99, rating: 4.8, isFeatured: false },
    { id: 'b3', title: 'Learning TypeScript 5', author: 'Boris Cherny', price: 44.50, rating: 4.7, isFeatured: true }
  ];

  return (
    <div className="component-panel">
      <h2 className="panel-title">📚 Recommended Technical Books</h2>

      {/* Conditional Rendering Method 1: Logical && Operator */}
      {showDiscount && (
        <div className="toggle-bar" style={{ borderLeft: '4px solid var(--accent-amber)' }}>
          <span>🎉 <strong>Flash Sale:</strong> Use code <code>REACT2026</code> for 20% off all books!</span>
          <button className="badge badge-featured" style={{ cursor: 'pointer', border: 'none' }} onClick={() => setShowDiscount(false)}>Dismiss</button>
        </div>
      )}

      <div className="items-grid">
        {/* List Component rendering with map() and keys */}
        {books.map((book) => (
          <div key={book.id} className="item-card">
            <div>
              {/* Conditional Rendering Method 2: Ternary Operator */}
              {book.isFeatured ? (
                <span className="badge badge-featured">⭐ Bestseller</span>
              ) : (
                <span className="badge badge-status">Standard Edition</span>
              )}

              <h3 className="item-title" style={{ marginTop: '0.5rem' }}>{book.title}</h3>
              <p className="item-meta">By {book.author}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>
                ${book.price}
              </span>
              <span style={{ fontSize: '0.9rem', color: '#fde047' }}>★ {book.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;
