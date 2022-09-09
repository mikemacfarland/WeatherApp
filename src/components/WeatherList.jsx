import React from 'react'
// import icons from '../assets/Icons'

function WeatherList({weatherData}) {
  return (
    weatherData.map(day =>{
        return(
            <div className='weather_list_item' key={day.day}>
                <p className="day">{day.day}</p>
                <div>
                    <img src="" alt="weather" />
                </div>
                <div className='temp'>
                    <p className='temp_max'>{day.temp_max}</p>
                    <p className='temp_min'>{day.temp_min}</p>
                </div>
            </div>
        )
    })
  )
}

export default WeatherList