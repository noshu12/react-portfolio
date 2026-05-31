import { Helmet } from 'react-helmet-async'
import About from '../components/About'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Noushad Alam - CS Student & Freelancer</title>
        <meta name="description" content="Learn about Noushad Alam - FUUAST Computer Science student, data engineer, and freelancer based in Karachi, Pakistan." />
        <meta name="keywords" content="About Noushad, CS Student, Freelancer Karachi, Data Engineer, FUUAST" />
        <meta property="og:title" content="About Noushad Alam" />
        <meta property="og:description" content="Learn about Noushad Alam - FUUAST Computer Science student, data engineer, and freelancer." />
        <meta property="og:type" content="website" />
      </Helmet>
      <About />
    </>
  )
}
