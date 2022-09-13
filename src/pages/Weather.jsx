import LocationSearch from '../components/LocationSearch';
import WeatherList from '../components/WeatherList';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import ForecastSelect from '../components/ForecastSelect';

function Weather() {

  const {error,forecastType,location} = useContext(WeatherContext)

  return (
    <>
        <p className='intro' >you are viewing the {forecastType} forecast for <strong>{location.LocalizedName} {location.AdministrativeArea.ID}, {location.PrimaryPostalCode}</strong></p>
        <ForecastSelect/>
        <LocationSearch/>
        <p className='error'>{error}</p>
        <WeatherList/>
        <Link id='about' to='/about'>About</Link>
    </>
  )
}

export default Weather