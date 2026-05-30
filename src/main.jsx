import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Css/index.css'
import App from './Componentes/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
