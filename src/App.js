import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { WeatherProvider } from './context/WeatherContext';
import Weather from './pages/Weather';

// how make this app into very cool app
//  --.05 use context to pass all states--
//  1. make weather tabs openable and get hourly weather for a day
//  2. redesign the IU
//  6. add display for night weather on day cards.
//  3. add city and state detection
//  4. add dropdown list of saved locations (add delete)
//  4. add not found display for zip code error
//  5. add functionability for 10 day forecast
//  7. add functionability for other parameter displays
//  6. export into mobile app

function App() {

  return (
    <div className='wrapper'>
      {/* context porvider */}
      <WeatherProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Weather/>}/>
          </Routes>
        </Router>
      </WeatherProvider>
  </div>
  )
}

export default App;
