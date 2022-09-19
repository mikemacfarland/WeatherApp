import LocationSearch from '../components/LocationSearch';
import WeatherList from '../components/WeatherList';
import {Link} from 'react-router-dom'
import { useContext,useState } from 'react';
import WeatherContext from '../context/WeatherContext';
import ForecastSelect from '../components/ForecastSelect';

function Weather() {

  const {error,forecastType,location,setLocationResults,savedLocations} = useContext(WeatherContext)
  const [show,setShow] = useState(false)

  const handleFocus =(e)=>{
    // @TODO - there may be a better way to make this work. but... it could be reused to add the same functionality to other components since called on a higher component
    if(e.target.parentNodeclassName !== 'weather__locationSearch' || 'weather__locationSearch__locationSelect' || 'weather__locationSearch__locationSelect__option'){
      setLocationResults([])
    }
  }

  const showSaved = ()=>{
    if(savedLocations.lenght > 0){
    setShow(true)
    console.log(show)
  }
  else{
    setShow(false)
  }
  }

  return (
    <div className='weather' onClick={handleFocus}>
        <p className='__intro' >you are viewing the {forecastType} forecast for<strong>&nbsp;{location.LocalizedName} {location.AdministrativeArea.ID}, {location.PrimaryPostalCode}</strong></p>
        <p className='__showSaved' onClick={showSaved}>My Saved Locations</p>
        
        <ForecastSelect className='__forecastSelect'/>
        <LocationSearch className='__locationSearch'/>
        <p className='__error'>{error}</p>
        <WeatherList className='__weatherList'/>
        <Link className='__aboutLink' id='about' to='/about'>About</Link>
    </div>
  )
}

export default Weather