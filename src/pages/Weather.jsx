import ZipSearch from '../components/ZipSearch';
import WeatherList from '../components/WeatherList';
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';


function Weather() {

    const {error,zipCode} = useContext(WeatherContext)

  return (
    <>
        <p className='intro' >you are viewing the 5 day forecast for zipcode {zipCode}</p>
        <ZipSearch/>
        <p className='error'>{error}</p>
        <div className='weather_slider'>
          <WeatherList/>
        </div>
    </>
  )
}

export default Weather