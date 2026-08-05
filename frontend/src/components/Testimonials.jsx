import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    quote: "Noushad delivered excellent work on time. Highly professional and detail-oriented. Great communicator throughout the project!",
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Innovations Inc",
    rating: 5,
    photo: "📧"
  },
  {
    id: 2,
    quote: "Impressive technical skills and problem-solving ability. Noushad understood our requirements perfectly and delivered beyond expectations.",
    name: "Marcus Chen",
    role: "CTO",
    company: "Data Solutions Ltd",
    rating: 5,
    photo: "💼"
  },
  {
    id: 3,
    quote: "Fast turnaround, clean code, and great collaboration. Highly recommend for any data engineering or Python development projects.",
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "Analytics Pro",
    rating: 5,
    photo: "🚀"
  }
]

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header" data-aos="fade-up">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          Feedback and testimonials from clients I've worked with
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="testimonial-card premium-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="testimonial-quote">
              <span className="quote-icon">"</span>
              <p className="quote-text">{testimonial.quote}</p>
              <span className="quote-icon close">"</span>
            </div>

            <div className="testimonial-footer">
              <div className="client-photo">{testimonial.photo}</div>
              <div className="client-info">
                <h4 className="client-name">{testimonial.name}</h4>
                <p className="client-role">{testimonial.role}</p>
                <p className="client-company">{testimonial.company}</p>
              </div>
            </div>

            <StarRating rating={testimonial.rating} />
          </div>
        ))}
      </div>

      <div className="testimonials-footer" data-aos="fade-up" data-aos-delay="300">
        <p className="footer-text">✨ More testimonials coming as I complete more projects!</p>
      </div>
    </section>
  )
}
