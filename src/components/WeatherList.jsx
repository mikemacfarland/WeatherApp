import Icons from '../assets/Icons'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

function WeatherList() {

    const {weather,forecastType} = useContext(WeatherContext)

    const getDayName = (dateStr, locale)=>{
            var date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });        
            }

    
    return (<ul className='weather_slider'>

                {weather.map((day,index) =>{
                    const dayName = forecastType === '5-Day' ? getDayName(day.Date) : day.DateTime

                        return (
                            <li className='weather_list_item' key={day.Date ? day.Date : day.DateTime}>
                                {/* @TODO transfer time into 12hr format readable time depending on timezone */}
                                <p className="day">{dayName ? dayName : day.DateTime}</p>
                                 <div>
                                    <img src={Icons[`I${day.Day ? day.Day.Icon : day.WeatherIcon}`]} alt={day.Day ? day.Day.IconPhrase : day.IconPhrase} />
                                </div>
                                <div className='temp'>
                                    <p className='temp_max'>{day.Temperature.Maximum ? `${day.Temperature.Maximum.Value}°` : `${day.Temperature.Value}°`}</p>
                                    {/* @TODO add condition to omit 2nd P if not used */}
                                    {/* this item is breaking statements */}
                                    <p className='temp_min'>{day.Temperature.Minimum ? `${day.Temperature.Minimum.Value}°` : ''}</p>
                                </div>
                            </li>
                        )})
                }

            </ul>
    )
}

export default WeatherList