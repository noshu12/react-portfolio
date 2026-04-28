import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Connect with me for collaborations, freelance work, or just to say hello
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card premium-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>alamnoushad081@gmail.com</p>
            <a href="mailto:alamnoushad081@gmail.com" className="info-link">Send Email →</a>
          </div>

          <div className="info-card premium-card">
            <div className="info-icon">📱</div>
            <h3>Phone</h3>
            <p>+92 314 8005977</p>
            <a href="tel:+923148005977" className="info-link">Call Now →</a>
          </div>

          <div className="social-card premium-card">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="mailto:alamnoushad081@gmail.com" className="social-icon" title="Email">
                ✉️
              </a>
              <a href="https://www.linkedin.com/in/noushad-alam-a959b3252" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                in
              </a>
              <a href="https://github.com/noshu12" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                ⚙️
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form premium-card" onSubmit={handleSubmit}>
          <h3>Send Me a Message</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={submitted}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
