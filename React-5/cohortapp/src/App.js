import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    {
      id: 1,
      name: 'DN5.0 Java Full Stack',
      code: 'CH-JFS-2026-01',
      technology: 'Spring Boot & Angular',
      startDate: '15-Jan-2026',
      status: 'ongoing',
      participants: 45
    },
    {
      id: 2,
      name: 'DN5.0 Cloud Native AWS',
      code: 'CH-AWS-2025-04',
      technology: 'AWS, Docker & K8s',
      startDate: '01-Nov-2025',
      status: 'completed',
      participants: 38
    },
    {
      id: 3,
      name: 'DN5.0 React & Microservices',
      code: 'CH-RMC-2026-02',
      technology: 'React v18 & Node.js',
      startDate: '01-Feb-2026',
      status: 'ongoing',
      participants: 50
    },
    {
      id: 4,
      name: 'DN5.0 Data Engineering',
      code: 'CH-DE-2025-03',
      technology: 'PySpark & Databricks',
      startDate: '10-Oct-2025',
      status: 'completed',
      participants: 30
    }
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Cognizant Academy Cohorts Dashboard</h1>
        <p className="dashboard-subtitle">Real-time status tracking for ongoing and completed training cohorts</p>
      </header>

      <main className="cohorts-grid">
        {cohorts.map((cohort) => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </main>
    </div>
  );
}

export default App;
