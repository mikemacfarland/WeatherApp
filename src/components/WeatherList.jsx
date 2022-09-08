import React from 'react'
// import icons from '../assets/Icons'

const weather = [
    {
        day: 'sun',
        temp_max: 78,
        temp_min: 67,
        weather:{
            description: 'light rain'
        },
        clouds:{
            all: 100
        }
    },
    {
        day: 'mon',
        temp_max: 78,
        temp_min: 67,
        weather:{
            description: 'light rain'
        },
        clouds:{
            all: 100
        }
    },
    {
        day: 'tues',
        temp_max: 78,
        temp_min: 67,
        weather:{
            description: 'light rain'
        },
        clouds:{
            all: 100
        }
    },
    {
        day: 'wed',
        temp_max: 78,
        temp_min: 67,
        weather:{
            description: 'light rain'
        },
        clouds:{
            all: 100
        }
    },
    {
        day: 'thurs',
        temp_max: 78,
        temp_min: 67,
        weather:{
            description: 'light rain'
        },
        clouds:{
            all: 100
        }
    },
    {
        day: 'fri',
        temp_max: 78,
        temp_min: 67,
        weather:{
            description: 'light rain'
        },
        clouds:{
            all: 100
        }
    },
    {
        day: 'sat',
        temp_max: 78,
        temp_min: 67,
        weather:{
            description: 'partly cloudy'
        },
        clouds:{
            all: 35
        }
    }
    ]

function WeatherList() {
  return (
    weather.map(day =>{
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