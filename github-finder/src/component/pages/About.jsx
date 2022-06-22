import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
    <div className='px-6'>
      <h4 class="text-2xl font-bold">About</h4>
      <h1 class="text-5xl font-bold">Github Finder</h1>
      <p class="py-6">This is a react based website which allows us to find different github user using API and tell about their reps, contributions</p>
      <Link to='/'>
      <button class="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default About