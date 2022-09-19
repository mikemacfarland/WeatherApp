import Icons from "../assets/Icons";
import {useState,useContext} from "react"
import WeatherContext from "../context/WeatherContext";
import LocationSelect from './LocationSelect'

function LocationSearch() {
  
  const {apiKey,setLocationResults} = useContext(WeatherContext)
  const [inputVal,setInputVal] = useState('')
  const country = 'US'

  const fetchLocations = async ()=>{
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/US/search?apikey=${apiKey}&q=${inputVal}`)
    const data = await response.json()
    // eslint-disable-next-line array-callback-return
    const filteredData = data.filter(item =>{
      if(item.Country.ID === country)
        return item
    })
    return setLocationResults(filteredData) 
  }

  const handleChange = (e)=>{
    setLocationResults([])
    setInputVal(e.target.value)
  }

  const handleSubmit  = (e)=>{
    e.preventDefault()
    inputVal === '' ? setLocationResults([]) : fetchLocations()
  } 

  return (
        <form onSubmit={handleSubmit} className='__locationSearch'>
            <input className='__locationSearch__input' onChange={handleChange} type="text" placeholder='Enter City Name or Zip'/>
            <button className='__locationSearch__button' type='submit'><img src={Icons.searchIcon} alt="" /></button>
            <LocationSelect/>
        </form>
  )
}

export default LocationSearch