import LocationSearch from '../components/LocationSearch';
import WeatherList from '../components/WeatherList';
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import ForecastSelect from '../components/ForecastSelect';


function Weather() {

    const {error,location} = useContext(WeatherContext)

  return (
    <>
        <p className='intro' >you are viewing the {'forecast type'} forecast for {location.LocalizedName} {location.AdministrativeArea.ID}, {location.PrimaryPostalCode}</p>
        <ForecastSelect/>
        <LocationSearch/>
        <p className='error'>{error}</p>
        <div className='weather_slider'>
          <WeatherList/>
        </div>
    </>
  )
}

export default Weather