import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"

function SavedLocationsSelect() {

    const {savedLocations} = useContext(WeatherContext)

    const handleClick = ()=>{
        console.log('saved weather select')
    }

  return (
    // @TODO use context - weather location code and name,
    // store code in state
    // use code to fetch location when saved loc is selected *onClick onSelect?
    <ul className='weather__locationSearch__locationSelect'>
      {/* {savedLocations.map(item =>{
        return <li className='weather__locationSearch__locationSelect__option' onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}</li> 
      })
      } */}
    </ul>
  )
}

export default SavedLocationsSelect