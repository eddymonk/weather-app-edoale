import "./App.css";
import React from "react";
import Weather from "../Weather/Weather";
//import Form from "../Form/Form";
import { useState } from "react";

const APIKEY = "d0d5c38bcf3d13d80ce73297fdec62b5";
const kelvinConstant = 273.15;
const App = () => {
  /**
   *
   * @param {*} city
   */
  const [city, setCity] = useState("");
  const [weatherCity, setWeatherCity] = useState({
    name: "",
    temp: null,
    description: "",
    humidity: null,
    message: null,
  });
  /**
   *
   * @param {*} evt
   */
  const handlerFieldCity = (evt) => {
    setCity(evt.target.value);
  };

  const getWeather = (evt) => {
    evt.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(">>>>>>>>>>>>>>>>>>", data);
        if (data.cod !== "404") {
          const {
            main: { humidity, temp },
            weather,
            name,
          } = data;
          console.log(humidity, temp, weather[0].description, name);
          let tempCelsius = Number.parseFloat(
            temp - kelvinConstant
          ).toPrecision(4);
          let weatherObj = {
            name,
            temp: tempCelsius,
            description: weather[0].description,
            humidity,
          };
          setWeatherCity(weatherObj);
        } else {
          console.log(data.message);
          setWeatherCity({ ...weatherCity, message: data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   *
   */
  return (
    <div className="App">
      <h2>app</h2>
      <form onSubmit={getWeather}>
        <input
          onChange={handlerFieldCity}
          type="text"
          placeholder="City"
          name="city"
          value={city}
        />
        <button>Submit</button>
      </form>
      {!weatherCity.message ? (
        <Weather
          city={weatherCity.city}
          description={weatherCity.description}
          temperature={weatherCity.temp}
          humidity={weatherCity.humidity}
        />
      ) : (
        <p>{weatherCity.message}</p>
      )}
    </div>
  );
};
export default App;
