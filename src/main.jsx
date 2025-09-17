import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Sert a activer le mode strict, c'est a dire un composant qui n'est buildé que en dev, qui aide a detecter les problemes, et met des warnings dans la console (ex : methodes obsoletes...) */}
    <BrowserRouter> {/* Sert a definir les routes de l'application */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
