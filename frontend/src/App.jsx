import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ReactGA from 'react-ga4'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  const [scrollY, setScrollY] = useState(0)

  // Initialize GA4 on mount
  useEffect(() => {
    ReactGA.initialize('G-NX7CQKHL6K')
  }, [])

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
      delay: 0,
      disable: false
    })
    
    // Refresh AOS on route change
    return () => {
      AOS.refresh()
    }
  }, [])

  // Track page views
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: document.title
    })
    
    // Refresh AOS on route change
    AOS.refresh()
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Set light theme as default
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  return (
    <div className="app">
      <div className="animated-gradient"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar scrollY={scrollY} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer className="footer">
        <p>Â© 2024 Noushad Alam. All rights reserved.</p>
        <div className="footer-divider"></div>
      </footer>
    </div>
  )
}


