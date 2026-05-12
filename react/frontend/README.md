# React Internship Tasks

## Virtual DOM and Stamina Updates

React uses the Virtual DOM to efficiently update only the parts of the UI that change.  
When the stamina state updates, React compares the new Virtual DOM with the previous one and re-renders only the stamina-related elements instead of refreshing the whole page.

---

## Modulus Logic for the 5th-Click Bug

```js
if (newClickCount % 5 === 0) {
  reduction = 15
}
```

This logic checks whether the click count is divisible by 5.  
Every 5th click triggers the critical bug and reduces stamina by 15.

---

## Differences Between Vite and Create React App (CRA)

| Vite | Create React App |
|------|------------------|
| Faster development server | Slower startup time |
| Uses native ES modules | Uses Webpack bundling |
| Lightweight and modern | Larger and older setup |