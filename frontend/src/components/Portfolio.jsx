import { useState, useEffect } from 'react'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'My Portfolio Project',
    category: 'Web',
    type: 'Web Project',
    description: 'Personal portfolio website built to present my profile, skills, and featured work in a clean way.',
    tags: ['HTML', 'CSS', 'Responsive UI'],
    link: 'https://github.com/noshu12/My-Portfolio',
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

  const categories = ['All', 'Web', 'Data', 'Scraping']
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
            onClick={() => setFilter(cat)}
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
