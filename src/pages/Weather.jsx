import LocationSearch from '../components/LocationSearch';
import WeatherList from '../components/WeatherList';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import ForecastSelect from '../components/ForecastSelect';
import SavedLocationsList from '../components/SavedLocationsList';
import Error from '../components/Error';

function Weather() {

  const {forecastType,location,setLocationResults} = useContext(WeatherContext)

  const handleFocus =(e)=>{
    // @TODO - there may be a better way to make this work. but... it could be reused to add the same functionality to other components since called on a higher component
    if(e.target.parentNodeclassName !== 'weather__locationSearch' || 'weather__locationSearch__locationSelect' || 'weather__locationSearch__locationSelect__option'){
      setLocationResults([])
    }
  }

  //@TODO implement the saved locations list as a popup that disapears upon 
  //selection (fades out) (prompts user if they are sure)
  return (
    <div className='weather' onClick={handleFocus}>
        <SavedLocationsList/>
        <p className='__intro' >you are viewing the {forecastType} forecast for<strong>&nbsp;{location.LocalizedName} {location.AdministrativeArea.ID}, {location.PrimaryPostalCode}</strong></p>
        <Error/>
        <ForecastSelect className='__forecastSelect'/>
        <LocationSearch className='__locationSearch'/>
        <WeatherList className='__weatherList'/>
        <Link className='__aboutLink' id='about' to='/about'>About</Link>
    </div>
  )
}

export default Weather