import { createContext ,useState,useEffect} from "react";

    const WeatherContext = createContext()

// exporting contextprovider
export const WeatherProvider = ({children}) =>{

    const [locationResults,setLocationResults] = useState([])
    const [location,setLocation] = useState({
        LocalizedName: 'Houghton',
        PrimaryPostalCode: '49931',
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