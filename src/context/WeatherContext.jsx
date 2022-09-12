import { createContext ,useState,useEffect} from "react";

    const WeatherContext = createContext()

// exporting contextprovider
export const WeatherProvider = ({children}) =>{

    const [locationResults,setLocationResults] = useState([])
    const [location,setLocation] = useState({
        PrimaryPostalCode: '49931'
        }
        )
    const [forecastType,setForecastType] = useState('5-Day')
    const [weather,setWeather] =  useState([])
    const [error,setError] = useState('')
    const apiKey = 'sEXI2rsvsiBsixCl56UM26BkmhwNFCyl'
    
    const fetchWeather = async ()=>{
        const response =  await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location.PrimaryPostalCode}?apikey=${apiKey}`)
        const data = await response.json()
        return setWeather(data.DailyForecasts)
    }

    useEffect(()=>{
        fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location])

    return <WeatherContext.Provider value={{
                weather,
                setWeather,
                error,
                setError,
                apiKey,
                locationResults,
                setLocationResults,
                setLocation
                }}> 
                    {children}
                </WeatherContext.Provider>
    }

  export default WeatherContext