import Icons from '../assets/Icons'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

function WeatherList() {

    const {weather,forecastType} = useContext(WeatherContext)

    const getDayName = (dateStr, locale)=>{
            var date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });        
            }

    // get 12hr time from string returned in 12hr forecast objects
    
    
    return (<ul className='__weatherList'>

                {weather.map((day,index) =>{
                    const dayName = forecastType === '5-Day' ? getDayName(day.Date) : day.DateTime
                    const getDayTime = (dateStr)=> {
                    const newTime = parseInt(dateStr.substring(11,13))
                    const amPm = newTime >= 12 ? 'PM' : 'AM'
                    return `${((newTime+11)%12 +1)}${amPm}`
                    }

                        return (
                            <li className='__card' key={day.Date ? day.Date : day.DateTime}>
                                <h4>{day.Date ? dayName : getDayTime(day.DateTime)}</h4>
                                <img src={Icons[`I${day.Day ? day.Day.Icon : day.WeatherIcon}`]} alt={day.Day ? day.Day.IconPhrase : day.IconPhrase} />
                                <small>{day.Day ? day.Day.IconPhrase : day.IconPhrase}</small>
                                <div className='__temp'>
                                    <p className='__high'>{day.Temperature.Maximum ? `${day.Temperature.Maximum.Value}°` : `${day.Temperature.Value}° `}</p>
                                    { day.Temperature.Minimum ?<p className='__low'>/ {`${day.Temperature.Minimum.Value}°`}</p> : null}
                                </div>
                            </li>
                        )})
                }

            </ul>
    )
}

export default WeatherList