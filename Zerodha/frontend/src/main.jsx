import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import HomePage from './Landing Page/home/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
