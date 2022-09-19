import WeatherContext from "../context/WeatherContext"
import { useContext } from "react"
import { useEffect } from "react"


function Error() {

  const {error,setError} = useContext(WeatherContext)

    useEffect(()=>{
      setTimeout(()=>{
        setError('')
        },[5000])  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])
    
    

  return (
    <p className={error ? '__error--active' : '__error'}>{error}</p>
  )
}

export default Error