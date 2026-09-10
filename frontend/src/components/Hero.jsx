import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'Cloud Data Engineer',
  'AI/ML Engineer',
  'Tech Innovator'
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleLetsChat = () => {
    ReactGA.event({
      category: 'Engagement',
      action: 'Hero CTA Clicked',
      label: 'Lets Talk Button'
    })
    navigate('/contact')
  }

  const handleDownloadCV = () => {
    ReactGA.event({
      category: 'Download',
      action: 'CV Downloaded',
      label: 'Hero Section'
    })
    const link = document.createElement('a')
    link.href = '/NOUSHAD-ALAM-CV-Resume_main.pdf'
    link.download = 'Noushad_Alam_CV.pdf'
    link.click()
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-accent-line"></div>
          <div className="hero-intro">
            <span className="hero-greeting">Hi, I'm</span>
          </div>
          <h1 className="hero-name">
            <span className="name-first">Noushad</span>
            <span className="name-last">Alam</span>
          </h1>
          <div className="hero-role-container">
            <h2 className="hero-role">{roles[currentRole]}</h2>
          </div>
          <p className="hero-description">
            Building scalable systems that solve real-world problems. Passionate about turning ideas into intelligent, impactful solutions.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">11+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Platforms</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleLetsChat}>Let's Talk</button>
            <button className="btn-secondary" onClick={handleDownloadCV}>Download CV</button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/noshu12" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/noushad-alam" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.fiverr.com/s/yvkwdQq" target="_blank" rel="noopener noreferrer" title="Fiverr"><i className="fab fa-fiverr"></i></a>
            <a href="mailto:alamnoushad081@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="gradient-orb"></div>
          <div className="code-block">
            <div className="code-header">const passion =</div>
            <div className="code-value">"AI & Data"</div>
          </div>
        </div>
      </div>
    </section>
  )
}
