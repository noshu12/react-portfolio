import './About.css'

export default function About() {
  const skills = [
    { name: 'SQL', level: 80 },
    { name: 'Artificial Intelligence', level: 70 },
    { name: 'Git & GitHub', level: 75 },
    { name: 'Apache Airflow', level: 60 },
    { name: 'Data Engineering', level: 65 },
    { name: 'Docker', level: 60 },
    { name: 'JSON / Data Handling', level: 80 },
    { name: 'Algorithms & Logic', level: 75 },
    { name: 'AI Prompting', level: 85 },
  ]

  const handleDownloadCV = () => {
    window.open('/NOUSHAD-ALAM-CV-Resume_main.pdf', '_blank')
  }

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Python AI & Data Engineer with expertise in building intelligent systems and data pipelines
          </p>

          <p className="about-description">
            Computer Science student at FUUAST University with expertise in Python, Artificial Intelligence, and Data Engineering. I build intelligent, scalable applications that solve real-world problems using modern technologies like Python, SQL, Docker, and Apache Airflow.
          </p>

          <p className="about-description">
            From developing AI-powered solutions to architecting data pipelines, I combine technical excellence with creative problem-solving. I'm dedicated to delivering quality code and turning ideas into impactful intelligent systems.
          </p>

          <div className="skills-container">
            <h3>Core Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          <button className="btn-primary" onClick={handleDownloadCV}>
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>

        <div className="about-visual">
          <div className="about-card premium-card">
            <div className="card-content">
              <span className="card-emoji">🐍</span>
              <h4>Python Development</h4>
              <p>Building scalable applications and automation scripts with clean code</p>
            </div>
          </div>

          <div className="about-card premium-card">
            <div className="card-content">
              <span className="card-emoji">🤖</span>
              <h4>AI & Machine Learning</h4>
              <p>Developing intelligent systems for predictive analytics and automation</p>
            </div>
          </div>

          <div className="about-card premium-card">
            <div className="card-content">
              <span className="card-emoji">📊</span>
              <h4>Data Engineering</h4>
              <p>Building efficient data pipelines and ETL processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
