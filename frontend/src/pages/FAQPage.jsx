import { Helmet } from 'react-helmet-async'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>FAQ - Noushad Alam | Frequently Asked Questions</title>
        <meta name="description" content="Frequently asked questions about Noushad Alam's services, rates, and project experience. Get answers to common questions about hiring and collaboration." />
        <meta name="keywords" content="FAQ, Frequently Asked Questions, Hire Developer, Services, Rates, Turnaround Time, Support" />
        <meta property="og:title" content="FAQ - Noushad Alam" />
        <meta property="og:description" content="Frequently asked questions about my services, rates, and project experience." />
        <meta property="og:type" content="website" />
      </Helmet>
      <FAQ />
    </>
  )
}
