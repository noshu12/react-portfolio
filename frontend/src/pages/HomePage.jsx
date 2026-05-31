import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Stats from '../components/Stats'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Noushad Alam - Python Developer & Data Engineer | Karachi</title>
        <meta name="description" content="Portfolio of Noushad Alam - AI Engineer, Data Engineer, and Web Developer from Karachi, Pakistan. Specializing in Python, ETL Pipelines, SQL, and Web Scraping." />
        <meta name="keywords" content="Python Developer, Data Engineer, Web Developer, Karachi, Pakistan, ETL, Web Scraping, AI" />
        <meta property="og:title" content="Noushad Alam - Python Developer & Data Engineer" />
        <meta property="og:description" content="Portfolio of Noushad Alam - AI Engineer, Data Engineer, and Web Developer from Karachi, Pakistan." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <Hero />
        <Stats />
      </div>
    </>
  )
}
