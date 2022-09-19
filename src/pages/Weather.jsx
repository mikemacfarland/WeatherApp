import LocationSearch from '../components/LocationSearch';
import WeatherList from '../components/WeatherList';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import ForecastSelect from '../components/ForecastSelect';

function Weather() {

  const {error,forecastType,location,setLocationResults} = useContext(WeatherContext)

  const handleFocus =(e)=>{
    // @TODO - there may be a better way to make this work. but... it could be reused to add the same functionality to other components since called on a higher component
    if(e.target.parentNodeclassName !== 'weather__locationSearch' || 'weather__locationSearch__locationSelect' || 'weather__locationSearch__locationSelect__option'){
      setLocationResults([])
    }
  }

  return (
    <div className='weather' onClick={handleFocus}>
        <p className='weather__intro' >you are viewing the {forecastType} forecast for<strong>&nbsp;{location.LocalizedName} {location.AdministrativeArea.ID}, {location.PrimaryPostalCode}</strong></p>
        <ForecastSelect className='weather__forecastSelect'/>
        <LocationSearch className='weather__locationSearch'/>
        <p className='weather__error'>{error}</p>
        <WeatherList className='weather__weatherList'/>
        <Link className='weather__aboutLink' id='about' to='/about'>About</Link>
    </div>
  )
}

export default Weather