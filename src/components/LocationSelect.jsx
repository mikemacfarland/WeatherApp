import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"
import {ReactComponent as Star} from '../assets/Icons/star.svg'

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
      locations.map((locationItem,i)=>{
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

  const isSaved = (parsedItem)=>{
    savedLocations.map(locationItem =>{
      const isSaved = parsedItem.Key === locationItem.Key ? true : false
      return isSaved
    })
  }

  
  
  //@TODO set logic for results, if no rusults throw error. notify user
  return (
      <ul className='weather__locationSearch__locationSelect'>
        {locationResults.map(item =>{
          return <li className='weather__locationSearch__locationSelect__option' onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}
                    <button onClick={(e) =>handleSave(e,item)} className={isSaved(item) ? 'weather__locationSearch__locationSelect__option__button --saved' : 'weather__locationSearch__locationSelect__option__button'}><Star/></button>
                  </li> 
        })}
      </ul>
      
  )
}

export default LocationSelect