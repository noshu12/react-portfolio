import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './Navbar.css'

export default function Navbar({ scrollY, isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    setIsSticky(scrollY > 50)
  }, [scrollY])

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <div className="logo">
            <span className="logo-gradient">NOUSHAD ALAM</span>
            <span className="logo-dot"></span>
          </div>
        </Link>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/project" onClick={() => setIsOpen(false)}>Project</Link></li>
          <li><Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          <a 
            href="https://www.fiverr.com/s/yvkwdQq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hire-btn"
            title="Hire me on Fiverr"
            onClick={() => {
              ReactGA.event({
                category: 'Engagement',
                action: 'Click',
                label: 'Fiverr Button'
              })
            }}
          >
            Hire on Fiverr
          </a>
          <a 
            href="https://www.freelancer.com/u/noushadaalam?sb=t" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="freelancer-btn"
            title="Hire me on Freelancer"
            onClick={() => {
              ReactGA.event({
                category: 'Engagement',
                action: 'Click',
                label: 'Freelancer Button'
              })
            }}
          >
            Hire on Freelancer
          </a>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark/light theme">
            <span className="theme-icon">{isDark ? '☀️' : '🌙'}</span>
          </button>
        </div>

        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

