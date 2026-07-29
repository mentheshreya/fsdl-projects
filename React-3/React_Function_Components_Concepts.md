# React Hands-On Lab 3 - Function Components & Styling Concepts

## 1. What is a Function Component in React?
A **Function Component** is a JavaScript function that accepts `props` (properties) as its argument and returns React JSX elements.

```javascript
export const CalculateScore = ({ Name, School, Total, goal }) => {
  const average = (Total / goal).toFixed(2);
  return (
    <div className="formatstyle">
      <h2>Student Name: {Name}</h2>
      <p>Average Score: {average}</p>
    </div>
  );
};
```

---

## 2. Advantages of Function Components
- **Simplicity & Readability**: Concise code without `this` keyword binding complexities.
- **Performance**: Lightweight with less overhead than class instances.
- **Hooks Integration**: React Hooks (`useState`, `useEffect`, `useContext`) enable full state and lifecycle management inside function components.

---

## 3. Component Styling Methods in React

### A. External CSS Files (Used in this Lab)
Importing an external `.css` file into the component file:
```javascript
import '../Stylesheets/mystyle.css';
```
Class names are specified using `className` attribute instead of standard HTML `class`.

### B. Inline Styling
JavaScript objects passed directly into the `style` prop:
```javascript
<div style={{ color: 'white', backgroundColor: '#0f172a', padding: '20px' }}>
```

---

## 4. Passing Props to Function Components
Props are immutable inputs passed from parent to child components:
```javascript
// Invocation in App.js:
<CalculateScore Name="Steeve" School="D.A.V Public School" Total={284} goal={3} />
```
Inside `CalculateScore`, props are destructuring-assigned: `({ Name, School, Total, goal })`.
