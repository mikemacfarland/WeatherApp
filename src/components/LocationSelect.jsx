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
  // @TODO change color of star dependent on save state

  const handleSave = (e,item)=>{
    e.stopPropagation()
    // seting variable to savedlocations state array
    const locations = savedLocations

    // locationKeys is set based on location array
    let locationKeys = locations.map(locationItem=>{
      return locationItem.Key
    })

    if(locations.length === 0){
      console.log('add first item')
      locations.push(item)
    }
    else if(locations.length > 0 && locationKeys.includes(item.Key)){
      console.log('check to remove items')
      
      locations.forEach((locationItem,i)=>{
        if(locationItem.Key === item.Key){
          // issue was using pop() instead of splice.... 
          locations.splice(i,1)
        }
      })
    }
    else{
          console.log('add additional items')
          return locations.push(item)
    }

    setSavedLocations(locations)
  }  
  
  //@TODO set logic for results, if no rusults throw error. notify user
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