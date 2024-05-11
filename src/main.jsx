import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LangProvider } from './LangContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangProvider>,
)
