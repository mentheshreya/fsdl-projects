import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal * 100).toFixed(2) + '%';
};

const calcScore = (total, goal) => {
  return (total / goal).toFixed(2);
};

export const CalculateScore = ({ Name, School, Total, goal }) => {
  const average = calcScore(Total, goal);

  return (
    <div className="formatstyle">
      <h2 className="score-title">Student Score Details</h2>
      <div className="score-details">
        <div className="detail-row">
          <span className="detail-label">Student Name:</span>
          <span className="detail-value">{Name}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">School:</span>
          <span className="detail-value">{School}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Total Marks:</span>
          <span className="detail-value">{Total}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Goal (Subjects):</span>
          <span className="detail-value">{goal}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Average Score:</span>
          <span className="detail-value highlight-value">{average}</span>
        </div>
      </div>
    </div>
  );
};

export default CalculateScore;
