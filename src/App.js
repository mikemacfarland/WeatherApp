import ZipSearch from './components/ZipSearch';
import WeatherSlider from './components/WeatherSlider';
import WeatherList from './components/WeatherList';

import { useState,useEffect} from 'react';

function App() {

  const [weather,setWeather] =  useState([])
  const [zipCode,setZipCode] = useState('49931')
  const [error,setError] = useState('')
  const apiKey = 'sEXI2rsvsiBsixCl56UM26BkmhwNFCyl'

  const fetchWeather = async ()=>{
    const response =  await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${zipCode}?apikey=${apiKey}
    `)
    const data = await response.json()
    return setWeather(data.DailyForecasts)
  }
  
  useEffect(()=> {
    fetchWeather()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[zipCode])

  return (
    <div className='wrapper'>
      <p className='intro' >you are viewing the 5 day forecast for zipcode {zipCode}</p>
      <ZipSearch setZip={setZipCode} setZipError={setError}/>
      <p className='error'>{error}</p>
      <WeatherSlider>
        <WeatherList weatherData={weather}/>
      </WeatherSlider>
    </div>
  )
}

export default App;
