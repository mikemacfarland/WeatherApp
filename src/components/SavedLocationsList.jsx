import { useContext,useState} from "react"
import WeatherContext from "../context/WeatherContext"
import {ReactComponent as Trash} from '../assets/Icons/trash-can.svg'
import {ReactComponent as DropDown} from '../assets/Icons/square-drop-down.svg'

function SavedLocationsList() {

    const {setError,setSavedLocations,savedLocations,setLocation,setLocationResults} = useContext(WeatherContext)
    const [hidden,setHidden] = useState(true)
    
    // show menu
    // @TODO @HELP is there a better way to manage hiding this without state?
    const dropDown =(e)=>{
      e.stopPropagation()
      if(savedLocations.length < 1){
        return setError('You have no saved locations!')
      }
      if(hidden === true){
        setHidden(false)
        setLocationResults([])
      }
      else{
        return setHidden(true)
      }
      
    }

    // set saved location
    const handleClick = (item)=>{ 
      setLocation(item)
      setLocationResults([])
      setHidden(true)
    }

    // set saved location
    const removeSaved=(e,item)=>{ 
      e.stopPropagation()
      const newSavedLocations = []
      savedLocations.forEach(locationItem=>{
        if(item.Key !== locationItem.Key){
          newSavedLocations.push(locationItem)
        }
      })
      setSavedLocations(newSavedLocations)
    }

  return (
    <div className="__savedLocationsList">
      <h4>Saved Locations<button onClick={((e)=>dropDown(e))}><DropDown/></button></h4>
      <ul className={`__list ${hidden === true ? '--hidden' : null}`}>
        {savedLocations.map(item =>{
          return <li className='__option' onClick={() =>handleClick(item)} key={item.Key} >{item.LocalizedName} {item.AdministrativeArea.ID}, {item.PrimaryPostalCode}
          <button onClick={(e)=>removeSaved(e,item)}><Trash/></button>
        </li> 
        })
        }
      </ul>
    </div>
  )
}

export default SavedLocationsList