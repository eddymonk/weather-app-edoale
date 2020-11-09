import React from 'react';
import './ForecastWeather.css'; 


const ForecastWeather = ({description, city, country, error, temperature, humidity}) => {
 return (
     <div className="container-forecast">
        <div className="forecastWeather">
            {<p>3h from now</p>}
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} C </p>}
            {description && <p> {description}</p>}
            {humidity && <p>{humidity}% humidity </p> }
            {error && <p>{error}</p>}
        </div>
     </div>


 )
}

export default ForecastWeather; 