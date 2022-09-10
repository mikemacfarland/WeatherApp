import ZipSearch from '../components/ZipSearch';
import WeatherSlider from '../components/WeatherSlider';
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
        <WeatherSlider>
          <WeatherList/>
        </WeatherSlider>
    </>
  )
}

export default Weather