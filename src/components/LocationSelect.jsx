import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"

function LocationSelect() {
  const {setLocationResults,locationResults,setLocation} = useContext(WeatherContext)

  const handleClick = (item)=>{
    setLocation(item)
    console.log(item)
    
    setLocationResults([])
  }

  //@TODO create way for list to close if user clicks off of list
  //@TODO set logic for results, if no rusults throw error. notify user 
  return (
    <ul className='weather__locationSearch__locationSelect'>
      {locationResults.map(item =>{
        return <li className='weather__locationSearch__locationSelect__option' onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}</li> 
      })}
    </ul>
  )
}

export default LocationSelect