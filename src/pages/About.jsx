import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
        <h1>About</h1>
        <p>Developed and Designed by <strong>Mike Macfarland</strong></p>
        <Link id='home' to='/'>Back to Weather</Link>
    </div>
  )
}

export default About