import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"

function ForecastSelect() {

  const {setForecastType,forecastType} = useContext(WeatherContext)

  //use state to manage this variable
  const types = [
    '12Hr','5-Day','10-Day','15-Day'
  ]

  const handleClick = (e)=>{
    setForecastType(e.target.innerText)
  }

  return (
    <ul className="forecast_select">
      {types.map(item=>{
        return(
          <li className={item === forecastType ? 'active' : ''} onClick={handleClick} key={item}>{item}</li>
        )
      })}
    </ul>
  )
}

export default ForecastSelect