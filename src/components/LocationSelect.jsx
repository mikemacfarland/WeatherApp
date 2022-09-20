import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"
import {ReactComponent as Star} from '../assets/Icons/star.svg'
import LocationSaveButton from "./LocationSaveButton"

function LocationSelect() {
  const {setSavedLocations,savedLocations,setLocationResults,locationResults,setLocation} = useContext(WeatherContext)

  const handleClick = (item)=>{ 
    setLocation(item)
    setLocationResults([])
  }

  // @TODO use localstorage to store saved locations upon this function running

  const handleSave = (e,item)=>{
    e.stopPropagation()
    // seting variable to savedlocations state array
    const locations = savedLocations

    // locationKeys is set based on location array
    let locationKeys = locations.map(locationItem=>{
      return locationItem.Key
    })
    // add first item
    if(locations.length === 0){
      locations.push(item)
    }
    // remove item if in list already
    else if(locations.length > 0 && locationKeys.includes(item.Key)){
      
      locations.forEach((locationItem,i)=>{
        if(locationItem.Key === item.Key){
          locations.splice(i,1)
        }
      })
    }
    // add aditional item if not in list
    else{
          return locations.push(item)
    }

    setSavedLocations(locations)
  }  
  
  return (
      <ul className='__locationSelect'>
        {locationResults.map(item =>{
          return <li className='__locationSelect__option' onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}
                    <LocationSaveButton clickHandler={(e)=>handleSave(e,item)} locationItem={item}><Star/></LocationSaveButton>
                  </li> 
        })}
      </ul>
  )
}

export default LocationSelect