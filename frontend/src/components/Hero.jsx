import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './Hero.css'

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const navigate = useNavigate()
  const roles = ['Full Stack Developer', 'AI/ML Engineer', 'Data Engineer', 'Tech Innovator']

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-up">
          <div className="accent-line" data-aos="fade-up" data-aos-delay="150"></div>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            Hi, I'm <br />
            <span className="hero-highlight">Noushad Alam</span>
          </h1>

          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
            I'm a passionate AI and Data Engineer who enjoys turning ideas into intelligent, scalable solutions. I focus on creating meaningful systems that solve real-world problems.
          </p>

          <div className="role-display" data-aos="fade-up" data-aos-delay="400">
            <span className="current-role">{roles[textIndex]}</span>
          </div>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
            <button onClick={() => navigate('/contact')} className="btn-primary">Let's Talk</button>
            <a href="/NOUSHAD-ALAM-CV-Resume_main.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={() => {
              ReactGA.event({
                category: 'Engagement',
                action: 'Download',
                label: 'CV Downloaded from Hero'
              })
            }}>
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-up" data-aos-delay="600">
          <div className="gradient-orb"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="code-block">
            <span>const passion = "AI & Data"</span>
          </div>
        </div>
      </div>
    </section>
  )
}
