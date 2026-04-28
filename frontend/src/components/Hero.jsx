import { useEffect, useState, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0)
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
        <div className="hero-text">
          <div className="accent-line"></div>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="hero-highlight">Noushad Alam</span>
          </h1>

          <p className="hero-subtitle">
            I'm a passionate AI and Data Engineer who enjoys turning ideas into intelligent, scalable solutions. I focus on creating meaningful systems that solve real-world problems.
          </p>

          <div className="role-display">
            <span className="current-role">{roles[textIndex]}</span>
          </div>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">View My Work</a>
            <a href="/NOUSHAD-ALAM-CV-Resume_main.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="gradient-orb"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="code-block">
            <span>const passion = "AI & Data"</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <p>Scroll to explore</p>
        <div className="scroll-down"></div>
      </div>
    </section>
  )
}
