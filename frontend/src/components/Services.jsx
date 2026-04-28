import { useNavigate } from 'react-router-dom'
import './Services.css'

const services = [
  {
    icon: '🐍',
    title: 'Python Development',
    description: 'Build scalable applications and automation scripts with clean, efficient Python code optimized for real-world performance.',
    color: '#8B45FF'
  },
  {
    icon: '🗄️',
    title: 'SQL & Databases',
    description: 'Design robust databases and write optimized queries for fast, reliable data management and integrity.',
    color: '#00BCD4'
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description: 'Develop intelligent AI-powered systems for predictive analytics, automation, and smart decision-making solutions.',
    color: '#FFC107'
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    description: 'Build efficient data pipelines and ETL processes to transform raw data into actionable insights.',
    color: '#FF1493'
  },
  {
    icon: '🐳',
    title: 'Cloud & DevOps',
    description: 'Deploy containerized applications with Docker and automate workflows using Apache Airflow for production-ready systems.',
    color: '#00FF88'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Create responsive, modern websites with HTML, CSS, and JavaScript for clean, fast, and fully functional user experiences.',
    color: '#FFB347'
  },
]

export default function Services({ onServiceClick }) {
  const navigate = useNavigate()

  const handleServiceClick = (serviceName) => {
    navigate(`/portfolio?service=${encodeURIComponent(serviceName)}`)
  }

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2 className="section-title">What I Build</h2>
        <p className="section-subtitle">
          Practical services focused on automation, data, and modern web solutions
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card premium-card"
            style={{ '--service-color': service.color }}
            onClick={() => handleServiceClick(service.title)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleServiceClick(service.title)
              }
            }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}
