import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './Navbar.css'

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false)
  const hireDropdownRef = useRef(null)

  useEffect(() => {
    setIsSticky(scrollY > 50)
  }, [scrollY])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hireDropdownRef.current && !hireDropdownRef.current.contains(event.target)) {
        setIsHireDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <div className="logo-wrapper">
            <div className="logo">
              <span className="logo-gradient">NOUSHAD ALAM</span>
              <span className="logo-dot"></span>
            </div>
            <div className="available-badge-navbar">
              <span className="badge-dot">🟢</span>
              Available for Freelance Work
            </div>
          </div>
        </Link>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/project" onClick={() => setIsOpen(false)}>Project</Link></li>
          <li><Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
          <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          <div className="hire-dropdown" ref={hireDropdownRef}>
            <button 
              className="hire-btn" 
              onClick={() => setIsHireDropdownOpen(!isHireDropdownOpen)}
              title="Hire me"
            >
              💼 Hire Me
            </button>
            {isHireDropdownOpen && (
              <div className="hire-dropdown-menu">
                <a 
                  href="https://www.fiverr.com/s/yvkwdQq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dropdown-item"
                  onClick={() => {
                    setIsHireDropdownOpen(false)
                    ReactGA.event({
                      category: 'Engagement',
                      action: 'Click',
                      label: 'Fiverr Option'
                    })
                  }}
                >
                  Fiverr
                </a>
                <a 
                  href="https://www.freelancer.com/u/noushadaalam?sb=t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dropdown-item"
                  onClick={() => {
                    setIsHireDropdownOpen(false)
                    ReactGA.event({
                      category: 'Engagement',
                      action: 'Click',
                      label: 'Freelancer Option'
                    })
                  }}
                >
                  Freelancer
                </a>
              </div>
            )}
          </div>
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

