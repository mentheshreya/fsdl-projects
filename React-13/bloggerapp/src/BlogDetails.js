import React, { useState } from 'react';

function BlogDetails() {
  const [filterCategory, setFilterCategory] = useState('All');

  const blogs = [
    { id: 'post-1', title: 'Deep Dive into React Server Components', author: 'Sophie Alpert', date: '25-Jul-2026', category: 'Architecture', readTime: '6 min read' },
    { id: 'post-2', title: 'Mastering State Management with NgRx & RxJS', author: 'Lukas Ruben', date: '20-Jul-2026', category: 'Frontend', readTime: '8 min read' },
    { id: 'post-3', title: 'Building Scalable Microservices with Spring Boot', author: 'Martin Fowler', date: '15-Jul-2026', category: 'Backend', readTime: '10 min read' }
  ];

  // Filtering list based on state
  const filteredBlogs = filterCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category === filterCategory);

  return (
    <div className="component-panel">
      <h2 className="panel-title">✍️ Engineering Blog Posts</h2>

      <div className="toggle-bar">
        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Filter Category: </span>
        {['All', 'Architecture', 'Frontend', 'Backend'].map((cat) => (
          <button
            key={cat}
            className={`badge ${filterCategory === cat ? 'badge-featured' : 'badge-status'}`}
            style={{ cursor: 'pointer', border: 'none', marginLeft: '0.25rem' }}
            onClick={() => setFilterCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="items-grid">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="item-card">
            <div>
              <span className="badge badge-status">{blog.category}</span>
              <h3 className="item-title" style={{ marginTop: '0.5rem' }}>{blog.title}</h3>
              <p className="item-meta">By {blog.author} • {blog.date}</p>
            </div>
            <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: '600' }}>
              ⏱️ {blog.readTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
