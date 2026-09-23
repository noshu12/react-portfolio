import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import UserIcon from './UserIcon'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/project', label: 'Project' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  // Lock page scroll while the drawer is open, and close it on Escape
  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const brand = (iconSize) => (
    <>
      <span className="nav-brand-icon">
        <UserIcon size={iconSize} />
      </span>
      <span className="nav-brand-text">NOUSHAD ALAM</span>
    </>
  )

  /*
   * The drawer is rendered through a portal straight into <body>.
   * Reason: `position: fixed` resolves against the nearest ancestor that has a
   * transform / filter / backdrop-filter. The pill navbar is glassmorphic, so a
   * drawer nested inside it would be trapped in the navbar box (that was the
   * cause of the left white gap and the shifted content). As a direct child of
   * <body> it always covers the full viewport: inset 0, width 100%, height 100%.
   */
  const drawer = (
    <div
      id="mobile-nav-drawer"
      className={`mobile-drawer ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!isOpen}
    >
      <div className="mobile-drawer-head">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          {brand(18)}
        </Link>
        <button
          type="button"
          className="mobile-drawer-close"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>

      <ul className="mobile-nav-links">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} onClick={closeMenu}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="mobile-drawer-foot">
        <Link to="/contact" className="mobile-drawer-cta" onClick={closeMenu}>Let's Talk</Link>
        <div className="mobile-drawer-socials">
          <a href="https://github.com/noshu12" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/noushad-alam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:alamnoushad081@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
        </div>
        <p className="mobile-drawer-note">Noushad Alam · AI &amp; Data Engineer</p>
      </div>
    </div>
  )

  return (
    <>
      <header className={`navbar ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-pill">
          {/* LEFT SLOT — brand: person icon + NOUSHAD ALAM */}
          <div className="nav-slot nav-slot-brand">
            <Link to="/" className="nav-brand" onClick={closeMenu} aria-label="Noushad Alam — home">
              {brand(18)}
            </Link>
          </div>

          {/* CENTER SLOT — desktop nav links (replaced by the drawer below 768px) */}
          <nav className="nav-center" aria-label="Primary navigation">
            <ul className="nav-links">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT SLOT — "Let's Talk" CTA, then the mobile hamburger on the far right */}
          <div className="nav-slot nav-slot-actions">
            <Link to="/contact" className="nav-cta" onClick={closeMenu}>Let's Talk</Link>

            <button
              type="button"
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {createPortal(drawer, document.body)}
    </>
  )
}
