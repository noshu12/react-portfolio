import { useState, useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const formRef = useRef(null)

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('Email service is not configured. Check environment variables.')
      return
    }

    setLoading(true)
    setSuccess('')
    setError('')

    try {
      // initialize (safe to call multiple times)
      try { emailjs.init(PUBLIC_KEY) } catch (initErr) { /* ignore init errors */ }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        from_name: formData.name,
        from_email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        reply_to: formData.email,
        message: formData.message,
        text: formData.message
      }

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      // result.status 200 on success
      setSuccess('Message sent successfully — thank you!')
      setFormData({ name: '', email: '', message: '' })
      if (formRef.current) formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      let detail = ''
      try {
        if (err && typeof err.text === 'function') {
          // try to read response body
          detail = await err.text()
        } else {
          detail = err && (err.message || JSON.stringify(err))
        }
      } catch (readErr) {
        detail = err && (err.message || JSON.stringify(err))
      }
      setError('Failed to send message. ' + detail)
    } finally {
      setLoading(false)
      // auto-hide messages after a short delay
      setTimeout(() => {
        setSuccess('')
        setError('')
      }, 5000)
    }
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

        <form ref={formRef} className="contact-form premium-card" onSubmit={handleSubmit}>
          <h3>Send Me a Message</h3>

          {success && <div className="toast success">{success}</div>}
          {error && <div className="toast error">{error}</div>}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          {/* Common template field names for EmailJS; keep in sync with visible fields */}
          <input type="hidden" name="from_name" value={formData.name} />
          <input type="hidden" name="user_name" value={formData.name} />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input type="hidden" name="from_email" value={formData.email} />
          <input type="hidden" name="user_email" value={formData.email} />
          <input type="hidden" name="reply_to" value={formData.email} />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <input type="hidden" name="text" value={formData.message} />

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
