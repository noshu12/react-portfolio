import { Helmet } from 'react-helmet-async'
import Project from '../components/Project'

export default function ProjectPage() {
  return (
    <>
      <Helmet>
        <title>Projects - Noushad Alam | Data Engineering & Web Development Portfolio</title>
        <meta name="description" content="Explore my projects: data pipelines, web scraping workflows, ETL systems, AI applications, and full-stack web development." />
        <meta name="keywords" content="Data Projects, ETL Pipeline, Web Scraping, Python Projects, Data Engineering Portfolio" />
        <meta property="og:title" content="Projects - Noushad Alam" />
        <meta property="og:description" content="Explore my projects: data pipelines, web scraping workflows, ETL systems, and AI applications." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Project />
    </>
  )
}
