import WeatherSlider from './components/WeatherSlider';
import WeatherList from './components/WeatherList';

function App() {
  return (
    //parent container holding weather slider with 7 elements
    <div>
      <WeatherSlider>
          <WeatherList/>
      </WeatherSlider>
    </div>
  )
}

export default App;
