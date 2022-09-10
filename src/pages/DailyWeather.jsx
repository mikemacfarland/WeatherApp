import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import { Link } from 'react-router-dom'

function HourlyWeather() {

  const {hourlyWeather} = useContext(WeatherContext)
  console.log(hourlyWeather)

  return (
    <>
      <div>Daily Weather Page</div>
      <div></div>
      <Link to='/'>to home</Link>
    </>
  )
}

export default HourlyWeather