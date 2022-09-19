import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"

function ForecastSelect() {

  const {setForecastType,forecastType} = useContext(WeatherContext)
  
  // @TODO store these values in state
  const types = [
    '12Hr','5-Day'
    // 10 and  15 day only avaliable on a elite license
    // '10day','15day'
  ]

  const handleClick = (e)=>{
    setForecastType(e.target.innerText)
  }

  return (
    <ul className='__forecastSelect'>
      {types.map(item=>{
        return(
          //modifier class for this item
          <li className={`__forecastSelect__option ${item === forecastType ?
              '__forecastSelect__option--active' :
              ''}`} 
              onClick={handleClick} key={item}>{item}
          </li>
        )
      })}
    </ul>
  )
}

export default ForecastSelect