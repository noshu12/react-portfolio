import { useSearchParams } from 'react-router-dom'
import Portfolio from '../components/Portfolio'

export default function PortfolioPage() {
  const [searchParams] = useSearchParams()
  const serviceFilter = searchParams.get('service')

  return <Portfolio filterByService={serviceFilter} />
}
