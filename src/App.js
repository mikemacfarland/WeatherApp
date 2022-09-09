import ZipSearch from './components/ZipSearch';
import WeatherSlider from './components/WeatherSlider';
import WeatherList from './components/WeatherList';

import { useState,useEffect} from 'react';

function App() {

  const [weather,setWeather] =  useState([])
  const [zipCode,setZipCode] = useState('49931')
  const apiKey = 'sEXI2rsvsiBsixCl56UM26BkmhwNFCyl'

  useEffect(()=> {
    fetchWeather();
    console.log('fetch')
  },[zipCode])

  const fetchWeather = async ()=>{
    const response =  await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${zipCode}?apikey=${apiKey}
    `)
    const data = await response.json()
    return setWeather(data.DailyForecasts)
  }

  return (
    <div className='wrapper'>
      <ZipSearch zip={zipCode} setZip={setZipCode}/>
      <WeatherSlider>
        <WeatherList weatherData={weather}/>
      </WeatherSlider>
    </div>
  )
}

export default App;
