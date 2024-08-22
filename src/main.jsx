import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <Header />
    <Content />
    <Footer />
  </StrictMode>,
)
  