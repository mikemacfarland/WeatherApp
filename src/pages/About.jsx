import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
        <h1>About</h1>
        <p>Developed and Designed by <strong>Mike Macfarland</strong></p>
        <p>This SPA currently uses the <strong><a href="https://developer.accuweather.com/">accuweather API</a></strong> to generate data.</p>

        <ul className='about__list'>Future updates will include:
          <li>List to select saved locations</li>
          <li>Local or server storage for saved locations</li>
          <li>account/email signup</li>
          <li>push notifications</li>
          
        </ul>
        <Link className='__homeLink' to='/'>Back to Weather</Link>
    </div>
  )
}

export default About