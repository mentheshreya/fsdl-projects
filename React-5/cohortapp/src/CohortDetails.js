import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const isOngoing = cohort.status && cohort.status.toLowerCase() === 'ongoing';
  const headerStyle = {
    color: isOngoing ? 'green' : 'blue',
    marginBottom: '12px',
    fontSize: '1.25rem',
    fontWeight: '700'
  };

  return (
    <div className={styles.box}>
      <h3 style={headerStyle}>{cohort.name}</h3>
      <dl>
        <dt>Cohort Code:</dt>
        <dd>{cohort.code}</dd>

        <dt>Technology Stack:</dt>
        <dd>{cohort.technology}</dd>

        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>

        <dt>Current Status:</dt>
        <dd>{cohort.status}</dd>

        <dt>Participants Count:</dt>
        <dd>{cohort.participants} Learners</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
