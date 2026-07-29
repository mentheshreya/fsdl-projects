# React Hands-On Lab 2 - Components Architecture & Concepts

## 1. What are React Components?
Components are independent, reusable pieces of code that serve as the building blocks of a React application. They return JSX elements describing what should appear on the screen.

---

## 2. Components vs Standard JavaScript Functions

| Feature | React Component | Standard JavaScript Function |
| :--- | :--- | :--- |
| **Return Value** | Returns JSX markup representing UI elements | Returns primitive values, objects, or functions |
| **Naming Convention** | Must start with an uppercase letter (PascalCase) | Uses camelCase naming |
| **Parameter Handling** | Accepts a single `props` object | Accepts multiple individual arguments |
| **Lifecycle & State** | Can manage internal state and lifecycle hooks | Executes once and returns a value |

---

## 3. Types of Components in React

### A. Class Components
ES6 JavaScript classes that extend `React.Component`. They require a `render()` method to return JSX.
```javascript
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return <h1>Welcome to the Home page of Student Management Portal</h1>;
  }
}
```

### B. Function Components
Simpler JavaScript functions that accept `props` and return JSX. Modern React uses Function Components with React Hooks.
```javascript
import React from 'react';

function Home() {
  return <h1>Welcome to the Home page of Student Management Portal</h1>;
}
```

---

## 4. Key Class Component Concepts

### Component Constructor (`constructor(props)`)
- Special method called automatically when a class component instance is created.
- Used to initialize local `this.state` and bind event handler methods.
- Must call `super(props)` before accessing `this`.

### `render()` Function
- The only required method in a React Class Component.
- Evaluates `this.props` and `this.state` and returns JSX elements.
- Must be a pure function (does not modify component state directly inside render).
