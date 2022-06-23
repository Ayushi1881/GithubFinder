import {Link} from 'react-router-dom'

function NotFound() {
  return (
 <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <h2 className="text-5xl font-bold">Page Not Found!!!</h2>

      <p className="py-6">The Link might be wrong or broken. Check the url again or go to home page by clicking below button</p>
      <Link to='/'>
      <button className="btn btn-primary">Home</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default NotFound