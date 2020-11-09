import React from 'react'
import './Weather.css'


const Weather = ({description, name, error, temperature, humidity, icon, tempMax, tempMin}) => { 

 return (
     <div className="weather">
            {name && <p><strong>{name}'s</strong>  weather is:</p>}
            <div className="weather-left">
                <div className="weather-temp">
                    {temperature && <p>{temperature} °C </p>}
                    {tempMax && <p>{tempMax} °C max</p>}
                    {tempMin && <p>{tempMin} °C min</p>}
                </div>
                <div className="weather-description">
                    {description && <p> {description} </p>}
                </div>
                <div className="weather-humidity">
                    {humidity && <p>{humidity}% humidity </p>}
                </div>
            </div>
            <div className="weather-right">
                    {<span id="span"></span>}
                <div className="weather-icon">
                    {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/> }
                </div>
            </div>


         {error && <p>{error}</p>}
     </div>
 )
}

export default Weather; 
