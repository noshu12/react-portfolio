import { useEffect, useMemo, useState } from 'react';
import './App.css';

const sections = ['home', 'about', 'services', 'portfolio', 'contact'];

const skills = [
  { icon: 'fas fa-database', name: 'SQL', level: 80 },
  { icon: 'fas fa-brain', name: 'Artificial Intelligence', level: 70 },
  { icon: 'fab fa-git-alt', name: 'Git & GitHub', level: 75 },
  { icon: 'fas fa-cogs', name: 'Apache Airflow', level: 60 },
  { icon: 'fas fa-chart-line', name: 'Data Engineering', level: 65 },
  { icon: 'fab fa-docker', name: 'Docker', level: 60 },
  { icon: 'fas fa-code', name: 'JSON / Data Handling', level: 80 },
  { icon: 'fas fa-sitemap', name: 'Algorithms & Logic', level: 75 },
  { icon: 'fas fa-wand-magic-sparkles', name: 'AI Prompting', level: 85 },
];

const services = [
  {
    icon: 'fas fa-code',
    title: 'Python Development',
    description:
      'Build scalable applications and automation scripts with clean, efficient Python code optimized for real-world performance.',
  },
  {
    icon: 'fas fa-database',
    title: 'SQL & Databases',
    description:
      'Design robust databases and write optimized queries for fast, reliable data management and integrity.',
  },
  {
    icon: 'fas fa-brain',
    title: 'Artificial Intelligence',
    description:
      'Develop intelligent AI-powered systems for predictive analytics, automation, and smart decision-making solutions.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Data Engineering',
    description:
      'Build efficient data pipelines and ETL processes to transform raw data into actionable insights.',
  },
  {
    icon: 'fab fa-docker',
    title: 'Cloud & DevOps',
    description:
      'Deploy containerized applications with Docker and automate workflows using Apache Airflow for production-ready systems.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Web Development',
    description:
      'Create responsive, modern websites with HTML, CSS, and JavaScript for clean, fast, and fully functional user experiences.',
  },
  {
    icon: 'fas fa-sitemap',
    title: 'Algorithms & Logic',
    description:
      'Solve complex problems with optimized algorithms and strategic thinking for efficient, scalable solutions.',
  },
  {
    icon: 'fab fa-git-alt',
    title: 'Version Control & Git',
    description:
      'Manage codebases professionally with Git and GitHub for seamless collaboration and project tracking.',
  },
  {
    icon: 'fas fa-wand-magic-sparkles',
    title: 'AI Prompting & Consulting',
    description:
      'Leverage AI tools effectively with expert prompting techniques and strategic guidance for your projects.',
  },
];

const timelineItems = [
  {
    duration: '2022 - Present',
    title: 'SQL & Data Handling',
    context: 'Strong Foundation',
    description: 'Strong foundation in SQL, JSON, and structured data workflows.',
  },
  {
    duration: '2023 - Present',
    title: 'Artificial Intelligence',
    context: 'Practical Learning',
    description: 'Learning AI concepts, smart workflows, and effective prompting.',
  },
  {
    duration: '2023 - Present',
    title: 'Computer Science',
    context: 'FUUAST University',
    description: 'Building academic and practical knowledge in computer science.',
  },
  {
    duration: '2024 - Present',
    title: 'Data Engineering & Airflow',
    context: 'Workflow Automation',
    description: 'Exploring pipelines, automation, and data engineering tools.',
  },
  {
    duration: '2024 - Present',
    title: 'Docker & Modern Tools',
    context: 'Deployment Readiness',
    description: 'Using Docker and modern tools for better project setup.',
  },
];

const portfolioItems = [
  {
    id: 1,
    category: 'web',
    featured: true,
    type: 'Web Project',
    number: '01',
    previewClass: 'portfolio-preview-web',
    previewTitle: 'Personal Brand Site',
    previewText: 'Modern responsive layout for your online presence.',
    title: 'My-portfolio Project code',
    description:
      'Personal portfolio website built to present your profile, skills, and featured work in a clean way.',
    highlights: ['Signature Project', 'Personal Branding'],
    stack: ['HTML', 'CSS', 'Responsive UI'],
    link: 'https://github.com/noshu12/My-Portfolio.git',
  },
  {
    id: 2,
    category: 'data',
    type: 'Data Engineering',
    number: '02',
    previewClass: 'portfolio-preview-data',
    previewTitle: 'Scrape to Analytics',
    previewText: 'Raw web data transformed into analysis-ready SQL tables.',
    title: 'Web Scraping to SQL Analytics Pipeline',
    description:
      'End-to-end workflow that gathers data from the web, processes it, and prepares it for structured SQL analysis.',
    highlights: [],
    stack: ['Python', 'SQL', 'ETL'],
    link: 'https://github.com/noshu12/CDE-KAGGALE-ETL-ASSIGNMENT.git',
  },
  {
    id: 3,
    category: 'scraping',
    type: 'Scraping',
    number: '03',
    previewClass: 'portfolio-preview-scraping',
    previewTitle: 'Crypto Market Capture',
    previewText: 'Focused data collection for coin market monitoring.',
    title: 'Scrapping coin market data',
    description:
      'Scraping workflow designed to capture, organize, and prepare coin market data for further analysis.',
    highlights: [],
    stack: ['Python', 'Web Scraping', 'Market Data'],
    link: 'https://github.com/noshu12/scrapping-coin-market-data.git',
  },
  {
    id: 4,
    category: 'data',
    type: 'Data Engineering',
    number: '04',
    previewClass: 'portfolio-preview-stream',
    previewTitle: 'Entertainment Data Flow',
    previewText: 'Data movement and transformation for Netflix-based datasets.',
    title: 'Netflix Data pipline',
    description:
      'Pipeline-focused project for cleaning, structuring, and managing Netflix data in a usable workflow.',
    highlights: [],
    stack: ['Python', 'Data Pipeline', 'Data Cleaning'],
    link: 'https://github.com/noshu12/netflix-pipline-assignment.git',
  },
  {
    id: 5,
    category: 'data',
    type: 'Insight Pipeline',
    number: '05',
    previewClass: 'portfolio-preview-insights',
    previewTitle: 'From Data to Insight',
    previewText: 'Scraped information transformed into readable business insight.',
    title: 'Scrape2Insights Pipeline',
    description:
      'Project built to move data from collection into meaningful insight generation through a simple analytical pipeline.',
    highlights: [],
    stack: ['Scraping', 'Transformation', 'Analytics'],
    link: 'https://github.com/noshu12/MINI-HACKTHON.git',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);

      let current = 'home';
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredPortfolio = useMemo(() => {
    if (filter === 'all') return portfolioItems;
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" onClick={() => handleNavClick('home')}>Noushad Alam</a>
          </div>
          <div className={`nav-menu${menuOpen ? ' active' : ''}`}>
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${activeSection === id ? ' active' : ''}`}
                onClick={() => handleNavClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I&apos;m <span className="highlight">Noushad Alam</span>
              </h1>
              <h2 className="hero-subtitle">Python AI & Data Engineer</h2>
              <p className="hero-description">
                I&apos;m a passionate AI and Data Engineer who enjoys turning ideas into intelligent,
                scalable solutions. I focus on creating meaningful systems that solve real-world
                problems, combining my expertise in Python, AI, Data Engineering, and modern cloud technologies.
              </p>
              <div className="hero-buttons">
                <a href="#portfolio" className="btn btn-primary">View My Work</a>
                <a
                  href="/NOUSHAD-ALAM-CV-Resume_main.pdf"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download"></i> Download CV
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img src="/img/profile.png" alt="Noushad Alam" className="profile-img" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <a href="#about">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
        <div className="hero-bg-shape"></div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <div className="section-title">
            <h2>Behind The <span>Code</span></h2>
            <p>A quick look at who I am, how I work, and what drives my projects</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>I&apos;m a passionate <span>Python AI & Data Engineer</span></h3>
              <p>
                Computer Science student at FUUAST University with expertise in Python, Artificial Intelligence,
                and Data Engineering. I build intelligent, scalable applications that solve real-world problems
                using modern technologies like Python, SQL, Docker, and Apache Airflow.
              </p>
              <p>
                From developing AI-powered solutions to architecting data pipelines, I combine technical excellence
                with creative problem-solving. I&apos;m dedicated to delivering quality code and turning ideas into
                impactful intelligent systems.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <i className="fas fa-user"></i>
                  <span>Noushad Alam</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>FUUAST University</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <span>alamnoushad081@gmail.com</span>
                </div>
              </div>
              <a href="/NOUSHAD-ALAM-CV-Resume_main.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Data Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section">
        <div className="container">
          <div className="section-title">
            <h2>Core <span>Stack</span></h2>
            <p>The tools, systems, and technical strengths I rely on most</p>
          </div>
          <div className="skills-content">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
                <span>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="container">
          <div className="section-title">
            <h2>What I <span>Build</span></h2>
            <p>Practical services focused on automation, data, and modern web solutions</p>
          </div>
          <div className="services-content">
            {services.map((service) => (
              <div key={service.title} className="service-item">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h4 className="stat-title">Growth Journey</h4>
          <div className="timeline">
            {timelineItems.map((item) => (
              <div key={`${item.duration}-${item.title}`} className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">{item.duration}</p>
                <h5>{item.title}<span> - {item.context}</span></h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Project <span>Vault</span></h2>
            <p>A curated mix of web builds, scraping experiments, and data workflow systems</p>
          </div>
          <div className="portfolio-showcase-intro">
            <p className="portfolio-kicker">Build Stories</p>
            <h3>Real projects shaped into clear, memorable showcases.</h3>
            <p className="portfolio-lead">
              Each project card gives a quick view of the goal, the stack, and the repository,
              so visitors can understand your work fast without digging around.
            </p>
          </div>
          <div className="portfolio-filters">
            <button className={`filter-btn${filter === 'all' ? ' active' : ''}`} onClick={() => setFilter('all')} type="button">All Builds</button>
            <button className={`filter-btn${filter === 'web' ? ' active' : ''}`} onClick={() => setFilter('web')} type="button">Web Presence</button>
            <button className={`filter-btn${filter === 'data' ? ' active' : ''}`} onClick={() => setFilter('data')} type="button">Data Systems</button>
            <button className={`filter-btn${filter === 'scraping' ? ' active' : ''}`} onClick={() => setFilter('scraping')} type="button">Scraping Lab</button>
          </div>
          <div className="portfolio-content">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className={`portfolio-item${item.featured ? ' portfolio-item-featured' : ''}`}
                data-category={item.category}
              >
                <article className="portfolio-card">
                  <div className="portfolio-card-top">
                    <span className="portfolio-type">{item.type}</span>
                    <span className="portfolio-number">{item.number}</span>
                  </div>
                  <div className={`portfolio-preview ${item.previewClass}`}>
                    <h4>{item.previewTitle}</h4>
                    <p>{item.previewText}</p>
                  </div>
                  <div className="portfolio-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.highlights.length > 0 ? (
                      <div className="portfolio-highlights">
                        {item.highlights.map((highlight) => (
                          <span key={highlight}>{highlight}</span>
                        ))}
                      </div>
                    ) : null}
                    <div className="portfolio-stack">
                      {item.stack.map((tech) => (
                        <span key={`${item.id}-${tech}`}>{tech}</span>
                      ))}
                    </div>
                    <div className="portfolio-links">
                      <a href={item.link} className="portfolio-link portfolio-link-primary" target="_blank" rel="noopener noreferrer">View Code</a>
                      <a href={item.link} className="portfolio-link portfolio-link-secondary" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In <span>Touch</span></h2>
            <p>Connect with me for collaborations, freelance work, or just to say hello</p>
          </div>
          <div className="contact-content">
            <div className="contact-info-wrapper">
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p><a href="mailto:alamnoushad081@gmail.com">alamnoushad081@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p><a href="tel:+923148005977">+92 314 8005977</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>
              <div className="contact-social">
                <h3>Follow Me</h3>
                <div className="social-links">
                  <a href="https://www.facebook.com/alamnoushad081?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/in/noushad-alam-a959b3252" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/noshu12" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <h3>Noushad Alam</h3>
              <p>Python AI and Data Engineer building practical automation, scraping systems, and data-driven solutions.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact Info</h3>
              <p><i className="fas fa-envelope"></i> alamnoushad081@gmail.com</p>
              <p><i className="fas fa-phone"></i> +92 314 8005977</p>
              <p><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Noushad Alam. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a href="#home" className={`back-to-top${showTop ? ' show' : ''}`}>
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

export default App;
