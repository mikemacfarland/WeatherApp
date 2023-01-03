import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { WeatherProvider } from './context/WeatherContext';
import About from './pages/About';
import Weather from './pages/Weather';
import Footer from './components/Footer';

// @TODO how make this app better
//   make weather tabs openable and get hourly weather for a day
//   redesign the IU ? 
//   add display for night weather on day cards.
//   add another route? for about page
//   add dropdown list of saved locations (add delete)
//   add not found display for zip code error

function App() {

  return (
    <>
      <div className='wrapper'>
        {/* context porvider */}
        <WeatherProvider>
          <Router>
            <Routes>
              <Route exact path='/' element={<Weather/>}/>
              <Route exact path='/about' element={<About/>}/>
            </Routes>
          </Router>
        </WeatherProvider>
      </div>
      <Footer/>
    </>
  )
}

export default App;
