import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [filterByService, setFilterByService] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleServiceClick = (serviceName) => {
    setFilterByService(serviceName)
  }

  return (
    <Router>
      <div className="app">
        <div className="animated-gradient"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        
        <Navbar scrollY={scrollY} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage onServiceClick={handleServiceClick} />} />
          <Route path="/portfolio" element={<PortfolioPage filterByService={filterByService} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer className="footer">
          <p>© 2024 Noushad Alam. All rights reserved.</p>
          <div className="footer-divider"></div>
        </footer>
      </div>
    </Router>
  )
}
