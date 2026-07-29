import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };

    // Binding event handlers to this keyword
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  sayHello() {
    const msg = 'Hello! Welcome to React Event Handling session.';
    this.setState({ message: msg });
    alert(msg);
  }

  // Multi-method invocation on Increment click
  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    this.sayHello();
  }

  handleDecrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  sayWelcome(param) {
    const msg = `Function invoked with argument: "${param}". Welcome to Cognizant React Training!`;
    this.setState({ message: msg });
    alert(msg);
  }

  handlePress(event) {
    const msg = `I was clicked! SyntheticEvent Type: ${event.type}`;
    this.setState({ message: msg });
    alert('I was clicked');
    console.log('Synthetic Event details:', event);
  }

  render() {
    return (
      <div className="card-panel">
        <h2 className="section-title">1. Counter & Event Handlers</h2>
        
        <div className="counter-badge">
          Counter: {this.state.count}
        </div>

        {this.state.message && (
          <div className="alert-message">
            {this.state.message}
          </div>
        )}

        <div className="btn-group">
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            ➕ Increment (Multi-Method)
          </button>
          
          <button className="btn btn-secondary" onClick={this.handleDecrement}>
            ➖ Decrement
          </button>
          
          <button className="btn btn-warning" onClick={() => this.sayWelcome('welcome')}>
            👋 Say Welcome (With Arg)
          </button>
          
          <button className="btn btn-primary" onClick={this.handlePress}>
            ⚡ OnPress (Synthetic Event)
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
