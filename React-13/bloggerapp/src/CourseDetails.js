import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 'c101', name: 'Angular v20 Masterclass', instructor: 'Minko Gechev', duration: '40 Hours', status: 'Enrolling' },
    { id: 'c102', name: 'Spring Boot & JPA Microservices', instructor: 'Eugen Paraschiv', duration: '55 Hours', status: 'In Progress' },
    { id: 'c103', name: 'React 18 & Redux Toolkit', instructor: 'Andrew Mead', duration: '35 Hours', status: 'Completed' }
  ];

  return (
    <div className="component-panel">
      <h2 className="panel-title">🎓 Certification Courses</h2>

      <div className="items-grid">
        {courses.map((course) => (
          <div key={course.id} className="item-card">
            <div>
              {/* Conditional Rendering: Status badge color */}
              <span
                className="badge"
                style={{
                  background: course.status === 'Completed' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(56, 189, 248, 0.2)',
                  color: course.status === 'Completed' ? '#34d399' : '#38bdf8',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {course.status}
              </span>

              <h3 className="item-title" style={{ marginTop: '0.5rem' }}>{course.name}</h3>
              <p className="item-meta">Instructor: {course.instructor}</p>
            </div>

            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              ⌛ Duration: {course.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
