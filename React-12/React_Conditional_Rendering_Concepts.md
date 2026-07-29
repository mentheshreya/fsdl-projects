# React Hands-On Lab 12 - Conditional Rendering Concepts

## 1. What is Conditional Rendering in React?
Conditional rendering in React works the same way conditions work in JavaScript. You evaluate state or props to create elements representing the current state, and let React update the UI to match.

---

## 2. Four Common Conditional Rendering Techniques

### A. Element Variables
Store React elements in variables. This allows conditionally rendering a part of the component while keeping the rest of the output clean.
```javascript
let pageContent;
if (isLoggedIn) {
  pageContent = <UserPage flights={flights} />;
} else {
  pageContent = <GuestPage flights={flights} />;
}

return <main>{pageContent}</main>;
```

### B. Ternary Operator (`condition ? trueComponent : falseComponent`)
Inline condition evaluating between two components:
```javascript
{isLoggedIn ? (
  <button onClick={handleLogout}>Logout</button>
) : (
  <button onClick={handleLogin}>Login</button>
)}
```

### C. Short-Circuit Logical AND Operator (`condition && component`)
Renders a component only when the condition evaluates to `true`:
```javascript
{hasUnreadMessages && <h2>You have unread notifications.</h2>}
```

---

## 3. Preventing Components from Rendering (`return null`)
In rare cases, you might want a component to hide itself even though it was rendered by another component. To do this, return `null` instead of its render output.

```javascript
function NotificationBanner({ show, message }) {
  // Prevent rendering if show is false
  if (!show) {
    return null;
  }

  return <div className="banner">{message}</div>;
}
```
*Note*: Returning `null` from a component's render method does not affect the firing of the component's lifecycle methods.
