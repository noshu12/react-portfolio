import { useState, useRef } from 'react'
import ReactGA from 'react-ga4'
import './Contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const formRef = useRef(null)

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate form in real-time
  const validateForm = (data) => {
    const newErrors = {}
    
    if (!data.name || data.name.trim() === '') {
      newErrors.name = 'Name is required'
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!data.email || data.email.trim() === '') {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(data.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!data.message || data.message.trim() === '') {
      newErrors.message = 'Message is required'
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate before submission
    const newErrors = validateForm(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setError('Please fix the errors above')
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('Email service is not configured. Check environment variables.')
      return
    }

    setLoading(true)
    setSuccess('')
    setError('')
    setErrors({})

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
      ReactGA.event({
        category: 'Engagement',
        action: 'Form Submit',
        label: 'Contact Form Submitted'
      })
      setSuccess('Message sent successfully — thank you!')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
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
      setError('Failed to send message. Please try again.')
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
      <div className="contact-header" data-aos="fade-up">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Connect with me for collaborations, freelance work, or just to say hello
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card premium-card" data-aos="fade-up" data-aos-delay="100">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>alamnoushad081@gmail.com</p>
            <a href="mailto:alamnoushad081@gmail.com" className="info-link">Send Email →</a>
          </div>

          <div className="social-card premium-card" data-aos="fade-up" data-aos-delay="200">
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

        <form ref={formRef} className="contact-form premium-card" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
          <h3>Send Me a Message</h3>

          {success && <div className="toast success">✅ {success}</div>}
          {error && <div className="toast error">❌ {error}</div>}

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Common template field names for EmailJS; keep in sync with visible fields */}
          <input type="hidden" name="from_name" value={formData.name} />
          <input type="hidden" name="user_name" value={formData.name} />

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <input type="hidden" name="from_email" value={formData.email} />
          <input type="hidden" name="user_email" value={formData.email} />
          <input type="hidden" name="reply_to" value={formData.email} />

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <input type="hidden" name="text" value={formData.message} />

          <button
            type="submit"
            className={`submit-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading && <span className="spinner"></span>}
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
