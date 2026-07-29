# React Hands-On Lab 13 - Lists, Keys & Conditional Rendering Concepts

## 1. Various Ways of Conditional Rendering in React

### A. Element Variables
Using JavaScript variables to store React component elements:
```javascript
let activeComponent;
if (tab === 'Books') activeComponent = <BookDetails />;
else if (tab === 'Blogs') activeComponent = <BlogDetails />;
```

### B. Ternary Operator (`condition ? A : B`)
Inline conditional evaluation inside JSX:
```javascript
{isFeatured ? <span className="badge">Featured</span> : null}
```

### C. Short-Circuit Logical AND (`condition && Component`)
Renders elements only when the condition is `true`:
```javascript
{showNotice && <div className="notice">Flash Sale!</div>}
```

### D. Switch Statement
Ideal for multi-view component switching based on state.

---

## 2. Rendering Multiple Components & List Components

In React, a **List Component** evaluates an array of data and maps each item into JSX elements using `Array.prototype.map()`.

```javascript
const books = [
  { id: 'b1', title: 'React Patterns' },
  { id: 'b2', title: 'Clean Architecture' }
];

return (
  <div>
    {books.map((book) => (
      <div key={book.id}>{book.title}</div>
    ))}
  </div>
);
```

---

## 3. Why are Keys Required in React Lists?
**Keys** help React identify which items have changed, been added, or been removed.

- **Reconciliation Optimization**: Keys give elements a stable identity, allowing React's diffing algorithm to re-order DOM nodes efficiently instead of re-rendering the entire list.
- **Rule of Keys**: Keys must be unique string or number IDs among siblings. Avoid using array indexes (`index`) as keys if list items can re-order or mutate.

---

## 4. Extracting Components with Keys
When extracting list items into separate custom components, place the `key` prop on the custom component tag itself, not inside the child component:

```javascript
// Correct Extraction:
{books.map((book) => (
  <BookCard key={book.id} book={book} />
))}
```
