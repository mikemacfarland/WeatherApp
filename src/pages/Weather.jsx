import LocationSearch from '../components/LocationSearch';
import WeatherList from '../components/WeatherList';
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import ForecastSelect from '../components/ForecastSelect';



function Weather() {

  const {error,forecastType,location} = useContext(WeatherContext)

  return (
    <>
        <p className='intro' >you are viewing the {forecastType} forecast for {location.LocalizedName} {location.AdministrativeArea.ID}, {location.PrimaryPostalCode}</p>
        <ForecastSelect/>
        <LocationSearch/>
        <p className='error'>{error}</p>
        {/* @TODO issue with weatherList breaking state or trying to update before state is set */}
        <WeatherList/>
    </>
  )
}

export default Weather