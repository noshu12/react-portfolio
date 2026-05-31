import { useState, useEffect } from 'react'
import ReactGA from 'react-ga4'
import './Project.css'

const projects = [
  {
    id: 1,
    title: 'My Portfolio Project',
    category: 'Web',
    type: 'Web Project',
    description: 'Personal portfolio website built to present my profile, skills, and featured work in a clean way.',
    tags: ['HTML', 'CSS', 'Responsive UI'],
    link: 'https://github.com/noshu12/My-Portfolio',
    liveLink: 'https://noushadxalam.dev',
    services: ['Web Development'],
    featured: true
  },
  {
    id: 2,
    title: 'Web Scraping to SQL Analytics Pipeline',
    category: 'Data',
    type: 'Data Engineering',
    description: 'End-to-end workflow that gathers data from the web, processes it, and prepares it for structured SQL analysis.',
    tags: ['Python', 'SQL', 'ETL'],
    link: 'https://github.com/noshu12/CDE-KAGGALE-ETL-ASSIGNMENT',
    services: ['Data Engineering', 'SQL & Databases', 'Python Development']
  },
  {
    id: 3,
    title: 'Scrapping Coin Market Data',
    category: 'Scraping',
    type: 'Scraping',
    description: 'Scraping workflow designed to capture, organize, and prepare coin market data for further analysis.',
    tags: ['Python', 'Web Scraping', 'Market Data'],
    link: 'https://github.com/noshu12/scrapping-coin-market-data',
    services: ['Python Development']
  },
  {
    id: 4,
    title: 'Netflix Data Pipeline',
    category: 'Data',
    type: 'Data Engineering',
    description: 'Pipeline-focused project for cleaning, structuring, and managing Netflix data in a usable workflow.',
    tags: ['Python', 'Data Pipeline', 'Data Cleaning'],
    link: 'https://github.com/noshu12/netflix-pipline-assignment',
    services: ['Data Engineering', 'Python Development']
  },
  {
    id: 5,
    title: 'Scrape2Insights Pipeline',
    category: 'Data',
    type: 'Data Pipeline',
    description: 'Project built to move data from collection into meaningful insight generation through a simple analytical pipeline.',
    tags: ['Scraping', 'Transformation', 'Analytics'],
    link: 'https://github.com/noshu12/MINI-HACKTHON',
    services: ['Data Engineering', 'Python Development', 'Cloud & DevOps']
  },
  {
    id: 6,
    title: 'Kafka Real-Time Stock Processing',
    category: 'Data',
    type: 'Data Engineering',
    description: 'Real-time data streaming project using Apache Kafka and Docker. Learn from basics to advanced Kafka concepts, manual setup, and stock market data processing workflows.',
    tags: ['Kafka', 'Docker', 'AWS', 'Stock Market'],
    link: 'https://github.com/noshu12/kafka101.git',
    services: ['Data Engineering', 'Cloud & DevOps', 'Python Development', 'Real-time Data Streaming']
  },
  {
    id: 7,
    title: 'Weather ETL Pipeline with Apache Airflow',
    category: 'Data',
    type: 'Data Engineering',
    description: 'Comprehensive hands-on classroom project demonstrating a complete Extract → Transform → Load pipeline using Apache Airflow 2.8 running in Docker. No API keys required.',
    tags: ['Apache Airflow', 'Docker', 'ETL', 'Data Pipeline'],
    link: 'https://github.com/noshu12/weather-airflow-docker-etl.git',
    services: ['Data Engineering', 'Cloud & DevOps', 'Python Development']
  },
  {
    id: 8,
    title: 'Snowflake SCD Implementation',
    category: 'Data',
    type: 'Data Engineering',
    description: 'Build and implement Slowly Changing Dimensions in Snowflake using Type 1 and Type 2 methods. Leverage Snowflake Streams and Tasks for efficient data warehousing.',
    tags: ['Snowflake', 'SQL', 'Data Warehouse', 'SCD'],
    link: 'https://github.com/noshu12/scd-data-warehousing-with-snowflake.git',
    services: ['SQL & Databases', 'Data Engineering', 'Cloud & DevOps', 'Data Warehousing']
  },
  {
    id: 9,
    title: 'E-commerce Data Pipeline on AWS',
    category: 'Data',
    type: 'Data Engineering',
    description: 'Enterprise-scale e-commerce data pipeline built with Snowflake, managed Apache Airflow, and AWS Kinesis. Complete data orchestration and streaming solution.',
    tags: ['Snowflake', 'Apache Airflow', 'AWS', 'Kinesis', 'ETL'],
    link: 'https://github.com/noshu12/ecommerce-datapipeline.git',
    services: ['Data Engineering', 'Cloud & DevOps', 'SQL & Databases', 'Data Warehousing', 'Real-time Data Streaming']
  },
  {
    id: 10,
    title: 'AI Voice Assistant',
    category: 'AI',
    type: 'AI & Automation',
    description: 'Object-Oriented Programming project featuring a virtual assistant powered by AI and voice recognition. Automate tasks with natural language processing and voice commands.',
    tags: ['Python', 'AI', 'Voice Recognition', 'OOP'],
    link: 'https://github.com/noshu12/VA-Virtual-Assistant.git',
    services: ['Artificial Intelligence', 'Python Development']
  },
  {
    id: 11,
    title: 'Preloved Kicks — Thrift Sneaker E-Commerce',
    category: 'Web',
    type: 'Full Stack E-Commerce',
    description: 'Full-stack e-commerce web application for a thrifted sneaker shop in Karachi, Pakistan. Built with React + Vite, Firebase Firestore, and Tailwind CSS with streetwear-inspired dark UI. Features real-time product management, shopping cart, WhatsApp integration, and advanced filtering.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'E-commerce', 'Full Stack'],
    link: 'https://github.com/noshu12/preloved-kicks-website',
    liveLink: 'https://preloved-kicks-website.vercel.app',
    services: ['Web Development', 'Full Stack Development'],
    featured: true
  },
]

export default function Portfolio({ filterByService }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [filter, setFilter] = useState(() => {
    return filterByService || 'All'
  })

  useEffect(() => {
    if (filterByService) {
      setFilter(filterByService)
    }
  }, [filterByService])

  const categories = ['All', 'Web', 'Data', 'Scraping', 'AI']
  const filtered = filter === 'All' 
    ? projects 
    : projects.filter(p => {
        // Check if it's a service filter
        if (p.services && p.services.includes(filter)) {
          return true
        }
        // Otherwise check category
        return p.category === filter
      })

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="section-title">Project Vault</h2>
        <p className="section-subtitle">
          A curated mix of web builds, scraping experiments, and data workflow systems
        </p>
      </div>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => {
              setFilter(cat)
              ReactGA.event({
                category: 'Engagement',
                action: 'Filter',
                label: `Projects Filtered by ${cat}`
              })
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className={`portfolio-item ${project.featured ? 'featured' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="portfolio-card premium-card">
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              {hoveredIndex === index && (
                <div className="portfolio-overlay">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="view-btn live-demo-btn" onClick={() => {
                      ReactGA.event({
                        category: 'Engagement',
                        action: 'Click',
                        label: `Live Demo Clicked - ${project.title}`
                      })
                    }}>
                      🌐 Live Demo
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn code-btn" onClick={() => {
                      ReactGA.event({
                        category: 'Engagement',
                        action: 'Click',
                        label: `View Code Clicked - ${project.title}`
                      })
                    }}>
                      💻 View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
