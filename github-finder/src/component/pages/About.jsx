import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div classNameName='px-6'>
      <h4 className="text-2xl font-bold">About</h4>
      <h1 className="text-5xl font-bold">Github Finder</h1>
      <p className="py-6">This is a react based website which allows us to find different github user using API and tell about their reps, contributions</p>
      <Link to='/'>
      <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default About