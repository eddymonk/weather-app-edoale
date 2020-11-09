import { useState, useEffect} from 'react'
import Weather2 from "../Weather/Weather2";
import './App2.css';
import axios from 'axios'



function App2() {
 const [valoreInput, setValoreInput]= useState ('')
 const [city, setCity] = useState('')
 const [weather, setweather] = useState({
     description:'',
     temp:'',
     humidity:'',
     icon:'',
     vero: true
 })

 const APIKEY = 'd1a0e9818bd599a5fd37abd9151a7791'
 
useEffect(()=>{
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
 .then(response => {
  const data = response.data;
  console.log(response.data);
  setweather({
    description: data.weather[0].description,
    temp:Math.floor(data.main.temp - 273.15),
    humidity:data.main.humidity,
    icon:data.weather[0].icon,
    vero:  true ? false : true
  })
  console.log(weather.vero + 'valore');
 }, error => {
  console.log(error);
 });
},[city, weather.vero]);


const handleChange = event => {
 setValoreInput(event.target.value)
}

function invia (){
    setCity(valoreInput)
    console.log(city);  
}

 return (
  <div className="Appp">
   <div className="appp-input">
     <h1>Type your city</h1>
     <input type="text"  placeholder="Search a city" className="city" city={city} onChange={handleChange} />
     <button onClick={invia}>Submit</button>
   </div>
   <div className="appp-weather">
    
    <Weather2
     city={city}
     description={weather.description}
     temp={weather.temp}
     humidity={weather.humidity}
     icon={weather.icon}
    /> 
    
   </div>
  </div>
 )
}

export default App2