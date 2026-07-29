# React Hands-On Lab 4 - Lifecycle Hooks & Async Fetch Concepts

## 1. Why Do We Need Component Lifecycle Hooks?
In React, components undergo three primary phases during their existence:
1. **Mounting**: Component is created and inserted into the DOM.
2. **Updating**: Component re-renders due to changes in `props` or `state`.
3. **Unmounting**: Component is removed from the DOM.

Lifecycle hooks allow developers to execute specific code (such as HTTP data fetching, setting timers, subscribing to streams, or cleaning up resources) at precise moments in a component's lifecycle.

---

## 2. Sequence of Rendering Steps (Mounting Phase)

```
1. constructor(props)        ---> Initialize state & bind handlers
2. static getDerivedStateFromError() / getDerivedStateFromProps()
3. render()                 ---> Evaluate JSX & build Virtual DOM
4. React updates DOM & refs ---> Insert nodes into real DOM
5. componentDidMount()       ---> Trigger async API calls / DOM operations
```

---

## 3. Detailed Hook Explanations

### A. `componentDidMount()`
- **When it fires**: Invoked immediately after a component is mounted (inserted into the DOM tree).
- **Primary Use Cases**:
  - Fetching remote data via REST APIs (`fetch()` or `axios`).
  - Setting up WebSocket subscriptions or timers (`setInterval`).
  - Measuring DOM node dimensions.

### B. `componentDidCatch(error, errorInfo)`
- **When it fires**: Invoked when an uncaught JavaScript error is thrown during rendering, in lifecycle methods, or in constructors of any child component.
- **Primary Use Cases**:
  - Catching errors in child component trees (Error Boundary pattern).
  - Logging error stack traces to monitoring services.
  - Displaying fallback UI or user alert popups.
