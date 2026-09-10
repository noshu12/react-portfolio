import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import ReactGA from 'react-ga4'
import './Project.css'

const categories = ['All', 'Web', 'Data', 'Scraping', 'AI']

export default function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [searchParams] = useSearchParams()
  const [filter, setFilter] = useState(() => {
    return searchParams.get('service') || 'All'
  })

  // Sync filter with URL search params (e.g. /project?service=Web%20Development)
  useEffect(() => {
    const serviceFilter = searchParams.get('service')
    if (serviceFilter) {
      setFilter(serviceFilter)
    }
  }, [searchParams])

  // Fetch projects from Firestore on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)

        const projectsQuery = query(
          collection(db, 'projects'),
          orderBy('id', 'asc')
        )

        const querySnapshot = await getDocs(projectsQuery)
        const projectsData = []

        querySnapshot.forEach((doc) => {
          const data = doc.data()

          // Normalize `tags` — Firestore docs may store it as a string
          let tags = data.tags
          if (typeof tags === 'string') {
            tags = tags.split(',').map(t => t.trim()).filter(Boolean)
          } else if (!Array.isArray(tags)) {
            tags = []
          }

          // Same safety for `services`
          let services = data.services
          if (typeof services === 'string') {
            services = services.split(',').map(s => s.trim()).filter(Boolean)
          } else if (!Array.isArray(services)) {
            services = []
          }

          projectsData.push({
            id: doc.id,
            ...data,
            tags,
            services
          })
        })

        setProjects(projectsData)
                        console.log(`Successfully loaded ${projectsData.length} projects from Firestore`)

        ReactGA.event({
          category: 'Content',
          action: 'Projects Loaded',
          label: `${projectsData.length} projects`
        })
      } catch (err) {
        console.error('Error loading projects from Firestore:', err)
        setError('Failed to load projects. Please try refreshing the page.')

        ReactGA.event({
          category: 'Error',
          action: 'Firestore Load Failed',
          label: String(err.message || err)
        })
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Filter projects based on selected filter (category or service)
  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => {
        if (p.services && p.services.includes(filter)) {
          return true
        }
        return p.category === filter
      })

  // Loading state
  if (loading) {
    return (
      <section className="portfolio-section">
        <div className="portfolio-header" data-aos="fade-up">
          <h2 className="section-title">Project Vault</h2>
          <p className="section-subtitle">
            A curated mix of web builds, scraping experiments, and data workflow systems
          </p>
        </div>
        <p className="project-status-text" style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem 0' }}>
          Loading projects from Firestore...
        </p>
      </section>
    )
  }

  // Error state
  if (error) {
    return (
      <section className="portfolio-section">
        <div className="portfolio-header" data-aos="fade-up">
          <h2 className="section-title">Project Vault</h2>
          <p className="section-subtitle">
            A curated mix of web builds, scraping experiments, and data workflow systems
          </p>
        </div>
        <p className="project-status-text error" style={{ color: '#ff6b6b', textAlign: 'center', padding: '2rem 0' }}>
          {error}
        </p>
      </section>
    )
  }

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-header" data-aos="fade-up">
        <h2 className="section-title">Project Vault</h2>
        <p className="section-subtitle">
          A curated mix of web builds, scraping experiments, and data workflow systems
        </p>
      </div>

      <div className="filter-buttons" data-aos="fade-up" data-aos-delay="100">
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
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="portfolio-card premium-card">
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>

                {Array.isArray(project.tags) && project.tags.length > 0 && (
                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              {hoveredIndex === index && (
                <div className="portfolio-overlay">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-btn live-demo-btn"
                      onClick={() => {
                        ReactGA.event({
                          category: 'Engagement',
                          action: 'Click',
                          label: `Live Demo Clicked - ${project.title}`
                        })
                      }}
                    >
                      Live Demo
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-btn code-btn"
                      onClick={() => {
                        ReactGA.event({
                          category: 'Engagement',
                          action: 'Click',
                          label: `View Code Clicked - ${project.title}`
                        })
                      }}
                    >
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-projects-text" style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem 0' }}>
          No projects found in this category.
        </p>
      )}

      <p className="projects-count-text" style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
        Showing {filtered.length} of {projects.length} projects
      </p>
    </section>
  )
}
