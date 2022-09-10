import Icons from '../assets/Icons'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

function WeatherList() {

    const {weather,} = useContext(WeatherContext)

    const getDayName = (dateStr, locale)=>{
            var date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });        
            }

    return weather.map(day =>{

        const dayName = getDayName(day.Date)
        const weatherIcon = {
            icon: `I${day.Day.Icon}`,
            phrase: day.Day.IconPhrase
            }

        return (
            <div className='weather_list_item' key={dayName}>
                <p className="day">{dayName}</p>
                <div>
                    <img src={Icons[weatherIcon.icon]} alt={weatherIcon.phrase} />
                </div>
                <div className='temp'>
                    <p className='temp_max'>{day.Temperature.Maximum.Value}°</p>
                    <p className='temp_min'>{day.Temperature.Minimum.Value}°</p>
                </div>
            </div>
        )
    })
}

export default WeatherList