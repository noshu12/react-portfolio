import { Helmet } from 'react-helmet-async'
import Services from '../components/Services'

export default function ServicesPage({ onServiceClick }) {
  return (
    <>
      <Helmet>
        <title>Services - Noushad Alam | Python Development & Data Engineering</title>
        <meta name="description" content="Professional services including Python development, data engineering, web scraping, SQL databases, AI solutions, and cloud DevOps." />
        <meta name="keywords" content="Python services, Data Engineering, Web Scraping, SQL, ETL Pipelines, Cloud Services" />
        <meta property="og:title" content="Services - Noushad Alam" />
        <meta property="og:description" content="Professional services including Python development, data engineering, web scraping, SQL databases, and AI solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Services onServiceClick={onServiceClick} />
    </>
  )
}
