import { useNavigate } from 'react-router-dom'
import './Services.css'

const services = [
  {
    icon: '🐍',
    title: 'Python Development',
    description: 'Build scalable applications and automation scripts with clean, efficient Python code optimized for real-world performance.',
    color: '#c8a882'
  },
  {
    icon: '🗄️',
    title: 'SQL & Databases',
    description: 'Design robust databases and write optimized queries for fast, reliable data management and integrity.',
    color: '#d4a5a0'
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description: 'Develop intelligent AI-powered systems for predictive analytics, automation, and smart decision-making solutions.',
    color: '#a8b5a3'
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    description: 'Build efficient data pipelines and ETL processes to transform raw data into actionable insights.',
    color: '#d4a5a0'
  },
  {
    icon: '🐳',
    title: 'Cloud & DevOps',
    description: 'Deploy containerized applications with Docker and automate workflows using Apache Airflow for production-ready systems.',
    color: '#a8b5a3'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Create responsive, modern websites with HTML, CSS, and JavaScript for clean, fast, and fully functional user experiences.',
    color: '#c8a882'
  },
  {
    icon: '⚡',
    title: 'Real-time Data Streaming',
    description: 'Build high-performance real-time data streaming systems using Apache Kafka, AWS Kinesis, and message queuing for event-driven architectures.',
    color: '#d4a5a0'
  },
  {
    icon: '🏢',
    title: 'Data Warehousing',
    description: 'Design and implement cloud-based data warehouses with Snowflake, optimized for analytics, reporting, and complex data modeling.',
    color: '#a8b5a3'
  },
]

export default function Services() {
  const navigate = useNavigate()

  const handleServiceClick = (serviceName) => {
    navigate(`/project?service=${encodeURIComponent(serviceName)}`)
  }

  return (
    <section id="services" className="services-section">
      <div className="services-header" data-aos="fade-up">
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
            data-aos="fade-up"
            data-aos-delay={index * 100}
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
