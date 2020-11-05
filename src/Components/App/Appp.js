
import { useState, useEffect} from 'react'
// import Weatherr from '../Weather/Weatherr'

import axios from 'axios'



function Appp() {

 const [city, setCity] = useState('')

 const APIKEY = 'd0d5c38bcf3d13d80ce73297fdec62b5'


useEffect(()=>{
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${APIKEY}`)
 .then(response => {
  console.log(response.data);
 }, error => {
  console.log(error);
 });
}, []);


const handleChange = event => {
 setCity(event.target.value)
}

 return (
  <div className="Appp">
   <div className="appp-input">
    <h1>Search for a city</h1>
    <form >
     <input type="text"  placeholder="Search a city" className="city"  onChange={handleChange} />
     <button>Submit</button>
    </form>
   </div>
   <div className="appp-weather">
    {city}
 
    {/* <Weatherr 
     city={city}
     description={weather.description}
     temperature={weather.temperature}
     humidity={weather.humidity}
     error={weather.error}
    /> */}
    
   </div>
  </div>
 )
}

export default Appp
