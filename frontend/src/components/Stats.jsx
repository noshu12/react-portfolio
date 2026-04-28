import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { number: '10+', label: 'Projects Completed', icon: '📊' },
  { number: '100%', label: 'Quality Focus', icon: '⭐' },
  { number: '5+', label: 'Data Projects', icon: '📈' },
  { number: '2+', label: 'Years Experience', icon: '🚀' },
]

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            const target = parseInt(stat.number)
            let current = 0
            const increment = target / 30

            const interval = setInterval(() => {
              current += increment
              if (current >= target) {
                setCounts((prev) => {
                  const newCounts = [...prev]
                  newCounts[index] = target
                  return newCounts
                })
                clearInterval(interval)
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.floor(current)
                  return newCounts
                })
              }
            }, 30)
          })
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card premium-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">
              {counts[index]}{stat.number.replace(/\d+/g, '')}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
