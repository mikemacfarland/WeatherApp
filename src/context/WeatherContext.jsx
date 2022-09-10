import { createContext ,useState,useEffect} from "react";


    const WeatherContext = createContext()

// exporting contextprovider
export const WeatherProvider = ({children}) =>{

    const [weather,setWeather] =  useState([])
    const [hourlyWeather,setHourlyWeather] = useState([])
    const [zipCode,setZipCode] = useState('49931')
    const [error,setError] = useState('')
    const apiKey = 'sEXI2rsvsiBsixCl56UM26BkmhwNFCyl'

    const fetchWeather = async ()=>{
        const response =  await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${zipCode}?apikey=${apiKey}
        `)
        const data = await response.json()
        return setWeather(data.DailyForecasts)
    }

    const fetchHourlyWeather = async ()=>{
        const response = await fetch("url")
        const data = await response.json()
        return setHourlyWeather(data)
    }
  
    useEffect(()=> {
        fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[zipCode])

    return <WeatherContext.Provider value={{
                weather,
                setWeather,
                hourlyWeather,
                setHourlyWeather,
                zipCode,
                setZipCode,
                error,
                setError,
                }}> 
                    {children}
                </WeatherContext.Provider>
    }

  export default WeatherContext