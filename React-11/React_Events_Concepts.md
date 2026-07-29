# React Hands-On Lab 11 - Event Handling & SyntheticEvent Concepts

## 1. What are React Events?
Handling events in React is very similar to handling events on DOM elements, with a few syntax differences:
1. **camelCase Naming**: React events are named using camelCase (e.g. `onClick`, `onChange`, `onSubmit`) instead of lowercase (`onclick`, `onchange`).
2. **JSX Function Passing**: You pass a function reference as the event handler rather than a string statement:
   - React: `<button onClick={this.handleClick}>`
   - HTML: `<button onclick="handleClick()">`
3. **Prevent Default Behavior**: You cannot return `false` to prevent default behavior in React; you must explicitly call `event.preventDefault()`.

---

## 2. What is a `SyntheticEvent`?
A **`SyntheticEvent`** is React's cross-browser wrapper around the browser's native DOM event object.

### Key Benefits:
- **Cross-Browser Compatibility**: Provides identical properties (`event.target`, `event.type`, `event.preventDefault()`) across Chrome, Firefox, Safari, and Edge.
- **Performance Optimization**: Event pooling and delegation at the root level optimize memory usage.

---

## 3. Handling `this` Keyword in Class Components
In JavaScript class methods, `this` is not bound by default. If you pass a method reference like `onClick={this.handleIncrement}` without binding, `this` will be `undefined` inside the handler.

### Three Ways to Bind `this`:
1. **Constructor Binding (Recommended)**:
   ```javascript
   this.handleClick = this.handleClick.bind(this);
   ```
2. **Public Class Fields (Arrow Functions)**:
   ```javascript
   handleClick = (e) => { console.log(this.state); }
   ```
3. **Inline Arrow Function**:
   ```javascript
   <button onClick={(e) => this.handleClick(e)}>
   ```

---

## 4. Passing Arguments to Event Handlers
To pass extra parameters along with the event object:
```javascript
<button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
```
