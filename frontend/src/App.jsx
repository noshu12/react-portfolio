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
      duration: 300,        /* fast reveal (0.3s) */
      easing: 'ease-out',
      once: true,           /* animate once, on first scroll into view */
      offset: 120,          /* trigger early: reveal as soon as the element nears the viewport */
      delay: 0,
      disable: false
    })
    
    // Refresh AOS on route change
    return () => {
      AOS.refresh()
    }
  }, [])

  /*
   * Turn OFF the browser's native scroll restoration.
   *
   * Without this, navigating from a long page (e.g. /project) to a shorter one
   * keeps the previous scroll offset, and because the new document is shorter the
   * browser clamps that offset to its maximum — which is exactly the
   * "page opens already scrolled to the bottom" bug.
   */
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Track page views + reset scroll position + refresh AOS on route change
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: document.title
    })

    // Every freshly opened route starts at the very top.
    // `behavior: 'instant'` is required because global.css sets
    // `html { scroll-behavior: smooth }` — without it the reset would animate
    // down the new page instead of snapping to the top.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

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
      <div className="bg-decor" aria-hidden="true">
        <div className="animated-gradient"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar scrollY={scrollY} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/project" element={<ProjectPage />} />
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


