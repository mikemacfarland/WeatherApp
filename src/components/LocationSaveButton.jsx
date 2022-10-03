import { useContext,useState,useEffect } from "react"
import WeatherContext from "../context/WeatherContext"

//@TODO refactor this component, state can be used in parent component to render the stars one color or the other.
//@TODO remove state where it isnt needed to create DOM events. use regular JS for DOM events
//there is repeated code in this component and locationselect component. 

function LocationSaveButton({clickHandler,children,locationItem}) {
    
    const {savedLocations} = useContext(WeatherContext)
    const [isSaved,setIsSaved] = useState(false)
   

    useEffect(()=>{
        checkSaved()
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clickHandler])

    const checkSaved = ()=>{
            const keys = []

            savedLocations.forEach(locationItem=>{
                keys.push(locationItem.Key)
                })
                if(keys.includes(locationItem.Key)){
                    return setIsSaved(true)
                }
                else{
                    return setIsSaved(false)
                }
            
    }
    

  return (
    <button onClick={clickHandler} className={isSaved ? '__button --saved' : '__button'}>{children}</button>
  )
}

export default LocationSaveButton