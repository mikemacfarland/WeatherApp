import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"

function LocationSelect() {
  const {setLocationResults,locationResults,setLocation} = useContext(WeatherContext)

  const handleClick = (item)=>{
    setLocation(item)
    setLocationResults([])
  }

  //create click off event to close select?? or just reset locationresults to initial
  return (
    <ul className="location_select">
      {locationResults.map(item =>{
        return <li onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}</li> 
      })}
    </ul>
  )
}

export default LocationSelect