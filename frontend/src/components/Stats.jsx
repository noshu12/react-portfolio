import { useEffect, useRef, useState } from 'react'
import './Stats.css'

export default function Stats() {
  const [stats, setStats] = useState([
    { id: 1, icon: '🎯', label: 'Projects Completed', target: 11, current: 0, suffix: '+' },
    { id: 2, icon: '💻', label: 'Active Platforms', target: 3, current: 0, suffix: '' },
    { id: 3, icon: '⚡', label: 'Lines of Code', target: 10, current: 0, suffix: 'K+' },
    { id: 4, icon: '⭐', label: 'Client Satisfaction', target: 100, current: 0, suffix: '%' }
  ])

  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          startCountUp()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  const startCountUp = () => {
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          current: Math.floor(stat.target * progress)
        }))
      )

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <section className="stats-section" ref={ref} data-aos="fade-up">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {stat.current}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
