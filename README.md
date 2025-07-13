# Widget-Based Scalable Dashboard – React + Vite + TailwindCSS

This project is a dynamic, widget-based dashboard application built using **React**, **Vite**, and **TailwindCSS**, designed to demonstrate modular architecture, state management, and scalability.

Users can **add**, **remove**, and **reorder** various widgets like charts, metrics, text blocks, and tables. All widgets are initialized from a configuration file and persisted via localStorage. Context API and `useReducer` are used for state management, ensuring efficient updates and re-renders. The application also supports lazy loading of widgets for performance optimization.

---

## Setup Guide

# 1. Clone the repository

git clone https://github.com/Pratik-Karanjit/Widget-Dashboard.git

cd Widget-Dashboard

# 2. Install dependencies

npm install

# 3. Start the development server

npm run dev

## Tech Stack

React + Vite

TailwindCSS for styling

Context API + useReducer

React.memo, lazy, Suspense

localStorage for persistence

---

## Features

- Add/remove/reorder widgets dynamically
- Config-driven widget initialization (`config.js`)
- Modular component architecture
- Persistent state with `localStorage`
- State managed via `Context API` + `useReducer`
- Optimized re-rendering with `React.memo`
- Lazy loading of widgets with `React.lazy` and `Suspense`
- Responsive layout with TailwindCSS

---

### Modularization

Each widget type is fully self-contained and lazy-loaded. `WidgetRenderer` dynamically renders components based on their `type`, allowing new widgets to be added with minimal changes.

---

## State Management

- Global state is handled using **React Context + useReducer**
- Actions supported: `ADD`, `REMOVE`, `REORDER`, `INIT`
- State is persisted to **localStorage** with `useEffect`

---

## Extensibility

To add a new widget:

Create a component in components/widgets/

Register it in WidgetRenderer

Include its config in config.js or dynamically add via UI

All widget logic is encapsulated, and supports internal settings (like chartType, columns, metricLabel, etc.).

---

## Error Handling

WidgetRenderer shows an error for unknown types

LocalStorage is validated before loading

Each widget has a fallback UI via Suspense boundaries

---

## Rendering Performance & Optimization

React.memo used on all widgets

Stable keys ensure React only re-renders changed widgets

React.lazy + Suspense prevent large bundle loads

Minimal prop change to avoid re-render cascades

## Cost of Scale

With 100+ widgets:

Memory grows linearly (one component per widget)

Drag/drop interactions may lag

LocalStorage capacity (~5MB) could be exceeded

---

## Extensibility vs. Performance

This system balances extensibility and performance via:

Modular component structure (React.memo)

Configurable rendering (config.js)

Lazy-loaded widgets

Context-driven global state

---

# Refer to the /architecture and solutions folder provided in the root for more details on implementation, performance considerations, extensibility, and potential trade-offs.
