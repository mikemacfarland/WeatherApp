import { createContext ,useState,useEffect} from "react";

    const WeatherContext = createContext()

// exporting contextprovider
export const WeatherProvider = ({children}) =>{

    const [locationResults,setLocationResults] = useState([])
    const [location,setLocation] = useState({
        LocalizedName: 'Houghton',
        Key: '333677',
        AdministrativeArea:{
            ID: 'Mi'
        }
        },
        )
    const [forecastType,setForecastType] = useState('5-Day')
    const [weather,setWeather] =  useState([])
    const [error,setError] = useState('')
    
    // @TODO apiKey needs to be stored on backend when deployed !!
    // also hide from network requests page in devtools.? is that possible?
    const apiKey = 'DGGHPhydnUGCKsmpQVYjnMuKrDA0iMHV'
    
    const fetchWeather = async ()=>{
        
        const url = forecastType === '5-Day' ? `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location.Key}?apikey=${apiKey}` : `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${location.Key}?apikey=${apiKey}`
        const response =  await fetch(url)
        const data = await response.json()
        if(forecastType === '5-Day'){
            console.log(data.DailyForecasts)
            return setWeather(data.DailyForecasts)
        }
        if(forecastType === '12Hr'){
            console.log(data) 
            return setWeather(data)
        }    
    }

    useEffect(()=>{
        fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[forecastType,location])

    return <WeatherContext.Provider value={{
                location,
                weather,
                apiKey,
                locationResults,
                error,
                forecastType,
                setWeather,
                setError,
                setLocationResults,
                setLocation,
                setForecastType,
                }}> 
                    {children}
                </WeatherContext.Provider>
    }

  export default WeatherContext