import ZipSearch from './components/ZipSearch';
import WeatherSlider from './components/WeatherSlider';
import WeatherList from './components/WeatherList';

import { useState,useEffect} from 'react';

function App() {

  const [weather,setWeather] =  useState('default')
  const [zipCode,setZipcode] = useState('49931')
  const apiKey = 'sEXI2rsvsiBsixCl56UM26BkmhwNFCyl'

  useEffect(()=> {
    fetchWeather();
  },[])

  const fetchWeather = async ()=>{
    const response =  await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${zipCode}?apikey=${apiKey}
    `)
    const data = await response.json()
    return setWeather(data.DailyForecasts)
  }

  return (
    //parent container holding weather slider with 7 elements
    <div>
      <ZipSearch zip={zipCode}/>
      <WeatherSlider>
          {/* <WeatherList weatherData={weather}/> */}
      </WeatherSlider>
    </div>
  )
}

export default App;
