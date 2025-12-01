import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404 — Not Found</h1>
        <p className="mt-3">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-4 inline-block text-indigo-600">Go home</Link>
      </div>
    </div>
  )
}
