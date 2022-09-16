import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"
import {ReactComponent as Star} from '../assets/Icons/star.svg'

function LocationSelect() {
  const {setSavedLocations,savedLocations,setLocationResults,locationResults,setLocation} = useContext(WeatherContext)

  const handleClick = (item)=>{ 
    setLocation(item)
    console.log(item)
    setLocationResults([])
  }

  // @TODO pass data from item to saved locations
  // @TODO check in handleSave if item is saved. if so, remove from saved locations
  // @TODO use localstorage to store saved locations upon this function running
  // @TODO change color of star dependent on save state
  const handleSave = (e,item)=>{
    e.stopPropagation()
    let locations = savedLocations
    locations.push(item)
    setSavedLocations(locations)
  }

  const checkSaved = (parsedItem)=>{
    savedLocations.map(item=>{
    if(parsedItem.Key === item.Key){
    return true
    }
    else{
      return null
    }
    })
  }
 
  //@TODO create way for list to close if user clicks off of list
  //@TODO set logic for results, if no rusults throw error. notify user
  return (
    <ul className='weather__locationSearch__locationSelect'>
      {locationResults.map(item =>{
        return <li className='weather__locationSearch__locationSelect__option' onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}
                <button onClick={(e) =>handleSave(e,item)} className={`weather__locationSearch__locationSelect__option__button ${checkSaved(item)}`}><Star/></button>
              </li> 
      })}
    </ul>
  )
}

export default LocationSelect