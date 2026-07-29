# React Hands-On Lab 5 - CSS Modules & Dynamic Inline Styling

## 1. Why Do We Need Component-Scoped Styling?
In standard web development, importing traditional CSS files into components registers styles globally. This can lead to class name collisions, unintended specificity overrides, and hard-to-maintain codebases.

---

## 2. What are CSS Modules?
A **CSS Module** is a CSS file in which all class names and animation names are scoped locally to the component by default.

- File Naming Convention: `[name].module.css` (e.g. `CohortDetails.module.css`).
- Import Syntax: `import styles from './CohortDetails.module.css';`
- Application: `<div className={styles.box}>`

### How CSS Modules Work:
During build compilation, CSS Modules mangle class names into unique identifier hashes:
`.box` -> `.CohortDetails_box__3a8f9`

---

## 3. Dynamic Inline Styles (`style` prop)
Inline styles allow dynamic styling based on component state or props:

```javascript
const isOngoing = cohort.status === 'ongoing';
const headerStyle = {
  color: isOngoing ? 'green' : 'blue'
};

<h3 style={headerStyle}>{cohort.name}</h3>
```

---

## 4. Comparing Styling Methods

| Styling Method | Scope | Dynamic Capability | Collision Prevention |
| :--- | :--- | :--- | :--- |
| **Global CSS** | Global | Limited (requires conditional class switching) | ❌ No (names collision prone) |
| **CSS Modules** | Component Local | Excellent with template literals / combining classes | ✅ Yes (unique generated hashes) |
| **Inline Styles** | Element Local | High (direct JS evaluation) | ✅ Yes (applies to target node) |
