import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Stairanimation from './components/about/Stairanimation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stairanimation>
    <App />
    </Stairanimation>
    </BrowserRouter>
  </StrictMode>,
)
