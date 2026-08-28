import { Link } from 'react-router-dom'
import NeuCard from '../components/NeuCard.jsx'
import NeuButton from '../components/NeuButton.jsx'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <NeuCard className="p-14">
        <p className="font-display font-bold text-6xl text-brand-500 mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-ink-soft mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <NeuButton as={Link} to="/" variant="primary">
          Back to Home
        </NeuButton>
      </NeuCard>
    </div>
  )
}
