import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ scrollY }) {
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
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/project" onClick={() => setIsOpen(false)}>Project</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        <Link to="/contact" className="cta-btn">Let's Talk</Link>

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

