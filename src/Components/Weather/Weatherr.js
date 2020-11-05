import React from 'react'

function Weatherr({city, description, temperature, humidity, error}) {
 return (
  <div className="weather-container">
   <h2>{city}</h2>
   <div className="weather-stats">
    <p>{description} </p>
    <p>{temperature} </p>
    <p>{humidity} </p>
    <p>{error}</p>
   </div>
  </div>
 )
}

export default Weatherr

