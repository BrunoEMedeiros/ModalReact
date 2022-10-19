import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { ModalProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
)
