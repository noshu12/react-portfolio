import { useSearchParams } from 'react-router-dom'
import Project from '../components/Project'

export default function ProjectPage() {
  const [searchParams] = useSearchParams()
  const serviceFilter = searchParams.get('service')

  return <Project filterByService={serviceFilter} />
}
