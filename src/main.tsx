import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MuiSetup } from './mui-setup.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MuiSetup>
      <App />
    </MuiSetup>
  </React.StrictMode>,
)
