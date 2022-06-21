import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Pokedex } from './Pokedex'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokedex />
    <Footer />
  </React.StrictMode>
)
