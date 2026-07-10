import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize/modern-normalize.css';
import './index.css'
import App from './App.jsx'

// dummy commit, see you soon
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
