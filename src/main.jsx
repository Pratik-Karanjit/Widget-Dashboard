import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { WidgetProvider } from './context/WidgetContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WidgetProvider>
      <App />
    </WidgetProvider>

  </StrictMode>,
)
