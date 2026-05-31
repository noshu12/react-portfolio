import { Helmet } from 'react-helmet-async'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - Noushad Alam | Hire Me for Projects</title>
        <meta name="description" content="Get in touch with Noushad Alam for freelance work, collaboration, or inquiries. Available on Fiverr, Freelancer, and direct contact." />
        <meta name="keywords" content="Contact Noushad, Hire Developer, Freelancer Contact, Data Engineer for Hire" />
        <meta property="og:title" content="Contact - Noushad Alam" />
        <meta property="og:description" content="Get in touch with Noushad Alam for freelance work and collaboration." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Contact />
    </>
  )
}
