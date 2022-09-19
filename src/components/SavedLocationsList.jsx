import { useContext } from "react"
import WeatherContext from "../context/WeatherContext"

function SavedLocationsList() {

    const {savedLocations} = useContext(WeatherContext)

    const handleClick = ()=>{
        console.log('saved weather select')
    }

  return (
    // @TODO use saved locations to populate list
    <div className="__savedLocationsList">
      <ul className='__list'>
        {savedLocations.map(item =>{
          return <li className='__option' onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}
          <button></button>
        </li> 
        })
        }
      </ul>
    </div>
  )
}

export default SavedLocationsList