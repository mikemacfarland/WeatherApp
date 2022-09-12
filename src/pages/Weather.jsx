import LocationSearch from '../components/ZipSearch';
import WeatherList from '../components/WeatherList';
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';


function Weather() {

    const {error,forecast} = useContext(WeatherContext)

  return (
    <>
        {/* <p className='intro' >you are viewing the {forecast} forecast for zipcode {zipCode}</p> */}

        <LocationSearch/>
        <p className='error'>{error}</p>
        <div className='weather_slider'>
          <WeatherList/>
        </div>
    </>
  )
}

export default Weather