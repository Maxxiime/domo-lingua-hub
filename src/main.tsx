import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('[BOOT] env', {
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
})

const rootEl = document.getElementById('root')!
ReactDOM.createRoot(rootEl).render(
  // You can keep StrictMode; it won't double-execute in production
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
