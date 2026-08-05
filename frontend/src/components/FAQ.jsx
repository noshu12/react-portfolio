import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "I offer Python development, data engineering, ETL pipelines, web scraping, SQL database design, web development with React, and AI solutions. Check the Services page for detailed information."
    },
    {
      id: 2,
      question: "How much do you charge?",
      answer: "My rates vary based on project complexity and scope. Starting from $10-30/hour for smaller tasks, and $50-150+ for larger projects. Contact me for a custom quote."
    },
    {
      id: 3,
      question: "What's your turnaround time?",
      answer: "Most projects can be completed within 3-7 days depending on complexity. I discuss timelines with clients upfront and always deliver on schedule."
    },
    {
      id: 4,
      question: "How do I hire you?",
      answer: "You can hire me through Fiverr (https://www.fiverr.com/s/yvkwdQq) or Freelancer.com. For direct collaboration, use the contact form on this website."
    },
    {
      id: 5,
      question: "Do you have experience with real projects?",
      answer: "Yes! Check my Projects page to see 11+ real projects including data pipelines, web scraping systems, ETL workflows, and web applications. All with working GitHub links."
    },
    {
      id: 6,
      question: "Can you work on tight deadlines?",
      answer: "Absolutely! I can handle tight deadlines with priority work. Contact me directly to discuss rush projects."
    },
    {
      id: 7,
      question: "What's your development approach?",
      answer: "I use modern tools and AI-assisted development for faster, cleaner code. I focus on scalability, performance, and writing well-documented code."
    },
    {
      id: 8,
      question: "Do you provide support after delivery?",
      answer: "Yes, I provide support and bug fixes after delivery. Contact me if you need modifications or troubleshooting."
    }
  ]

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header" data-aos="fade-up">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Common questions about my services and work
        </p>
      </div>

      <div className="faq-container">
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <button
                className={`faq-question ${openItems[faq.id] ? 'open' : ''}`}
                onClick={() => toggleItem(faq.id)}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-arrow">▼</span>
              </button>
              {openItems[faq.id] && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
