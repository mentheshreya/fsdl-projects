import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMsg: ''
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts from API server.');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true, errorMsg: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMsg: error.toString() });
    alert('An error occurred in Posts component: ' + error.toString());
    console.error('componentDidCatch:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong!</h2>
          <p>{this.state.errorMsg}</p>
        </div>
      );
    }

    if (this.state.posts.length === 0) {
      return <div className="loading-spinner">Loading posts...</div>;
    }

    return (
      <div className="posts-grid">
        {this.state.posts.map((post) => (
          <div key={post.id} className="post-card">
            <span className="post-id-badge">Post #{post.id}</span>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
