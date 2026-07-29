import React from 'react';

function NotificationBanner({ show, message, onClose }) {
  // Preventing component from rendering by returning null
  if (!show) {
    return null;
  }

  return (
    <div className="notification-banner">
      <span>📢 {message}</span>
      <button className="banner-close" onClick={onClose} aria-label="Close notification">
        ✖
      </button>
    </div>
  );
}

export default NotificationBanner;
