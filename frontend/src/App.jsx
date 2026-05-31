import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjectPage from './pages/ProjectPage'
import TestimonialsPage from './pages/TestimonialsPage'
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
  const [filterByService, setFilterByService] = useState(null)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Initialize GA4 on mount
  useEffect(() => {
    ReactGA.initialize('G-NX7CQKHL6K')
  }, [])

  // Track page views
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: document.title
    })
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [isDark])

  const handleServiceClick = (serviceName) => {
    setFilterByService(serviceName)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="app">
      <div className="animated-gradient"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      
      <Navbar scrollY={scrollY} isDark={isDark} toggleTheme={toggleTheme} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage onServiceClick={handleServiceClick} />} />
        <Route path="/project" element={<ProjectPage filterByService={filterByService} />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer className="footer">
        <p>© 2024 Noushad Alam. All rights reserved.</p>
        <div className="footer-divider"></div>
      </footer>
    </div>
  )
}
