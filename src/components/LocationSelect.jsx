import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"

function LocationSelect() {
  const {setLocationResults,locationResults,setLocation} = useContext(WeatherContext)

  const handleClick = (item)=>{
    setLocation(item)
    console.log(item)
    setLocationResults([])
  }

  //@TODO set logic for results, if no rusults throw error. notify user 
  return (
    <ul className="location_select">
      {locationResults.map(item =>{
        return <li onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}</li> 
      })}
    </ul>
  )
}

export default LocationSelect