import './App.css';
import Weather from '../Weather/Weather'
import Form from '../Form/Form'
import {useState} from 'react'

function App() {
  const [weather,setWeather] = useState([])

  const APIKEY = 'd0d5c38bcf3d13d80ce73297fdec62b5'

  async function fetchData(event) {
    const city = event.target.element.city.value
      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      if(city) {
      setWeather({
        data: apiData,
        city: apiData.city,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp - 273.15),
        humidity: apiData.main.humidity,
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
          description: '',
          temperature: '',
          humidity: '',
          error:"Scrivi una città"
      }
      )}
  }

  return (
    <div className="app">
      <div className="app-container">
        <div className="form">
        <h2>app</h2>
        <Form getWeather={fetchData} />
        </div>
  
        <Weather
          city={weather.city}
          description={weather.description}
          temperature={weather.temperature}
          humidity={weather.humidity}
          error={weather.error}
        />

        {/* <FotecastWeather /> */}

      </div>
      
    </div>
  );
}

export default App;
