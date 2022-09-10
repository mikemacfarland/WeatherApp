import Icons from '../assets/Icons'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { Link } from 'react-router-dom';

function WeatherList() {

    const {weather,setDailyDate} = useContext(WeatherContext)

    const getDayName = (dateStr, locale)=>{
            var date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });        
            }

    return weather.map(day =>{

        const handleLink = ()=>{
            setDailyDate(day.Date)
        }

        const dayName = getDayName(day.Date)
        const weatherIcon = {
            icon: `I${day.Day.Icon}`,
            phrase: day.Day.IconPhrase
            }

        return (
            <Link to='/hourly_weather' onClick={handleLink} className='weather_list_item' key={dayName}>
                <p className="day">{dayName}</p>
                <div>
                    <img src={Icons[weatherIcon.icon]} alt={weatherIcon.phrase} />
                </div>
                <div className='temp'>
                    <p className='temp_max'>{day.Temperature.Maximum.Value}°</p>
                    <p className='temp_min'>{day.Temperature.Minimum.Value}°</p>
                </div>
            </Link>
        )
    })
}

export default WeatherList