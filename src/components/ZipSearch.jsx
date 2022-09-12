import { useEffect } from "react";
import Icons from "../assets/Icons";
import {useState,useContext} from "react"
import WeatherContext from "../context/WeatherContext";
import LocationSelect from '../components/LocationSelect'

function LocationSearch() {

  //importing context here
  const {apiKey,setLocationResults} = useContext(WeatherContext)
  const [inputVal,setInputVal] = useState('49931')
  const country = 'US'

  const fetchLocations = async ()=>{
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${inputVal}`)
    const data = await response.json()
    const filteredData = data.filter(item =>{
      if(item.Country.ID === country)
        return item
    })
    return setLocationResults(filteredData) 
  }

  const handleChange = (e)=>{
        return setInputVal(e.target.value)
  }

  const handleSubmit  = (e)=>{
    e.preventDefault()
    fetchLocations()
  }

  return (
    // make this into form so you can use onSubmit
        <form onSubmit={handleSubmit} className='search_bar_box'>
            <input onChange={handleChange} type="text" placeholder='Enter City Name or Zip'/>
            <button type='submit'><img src={Icons.searchIcon} alt="" /></button>
            <LocationSelect/>
        </form>
  )
}

export default LocationSearch