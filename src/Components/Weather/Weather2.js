import React from 'react'
import './Weather2.css'

const Weather2 = ({city, description, temp, humidity, icon}) => {

const citi = city.charAt(0).toUpperCase()+city.slice(1);

 return (
  <div className="weather-container">
            {city && <p> The weather in <strong>{citi}</strong> is:</p>}
         <div className="weather-stats">
            <div className="temp">
                  {temp && <p>{temp} °C</p>}
            </div>
            <div className="description">
                  {description && <p> {description}</p>}
            </div>
            <div className="humidity">
                  {humidity && <p>{humidity}% humidity </p> }  
            </div>
         </div>
         <div className="icon">
               {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>}
         </div>
  </div>
 )
}

export default Weather2

