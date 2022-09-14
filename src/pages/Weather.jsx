import LocationSearch from '../components/LocationSearch';
import WeatherList from '../components/WeatherList';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import ForecastSelect from '../components/ForecastSelect';

function Weather() {

  const {error,forecastType,location} = useContext(WeatherContext)

  return (
    <div className='weather'>
        <p className='weather__intro' >you are viewing the {forecastType} forecast for <strong>{location.LocalizedName} {location.AdministrativeArea.ID}, {location.PrimaryPostalCode}</strong></p>
        <ForecastSelect className='weather__forecastSelect'/>
        <LocationSearch className='weather__locationSearch'/>
        <p className='weather__error'>{error}</p>
        <WeatherList className='weather__weatherList'/>
        <Link className='weather__aboutLink' id='about' to='/about'>About</Link>
    </div>
  )
}

export default Weather