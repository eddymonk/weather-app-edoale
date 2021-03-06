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
    tempMax:'',
    tempMin:'',
    humidity: null,
    message: null,
    icon:null,
  });
  // const [forecastWeater, setForecastWeather] = useState({
  //   id:'',
  //   data:'',
  //   description:'',
  //   temperature:'',

  // })
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
        fetch(
          `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`
        )
        .then((res2) => res2.json())
        .then((data2 =>{
          console.log(">>>data2", data2)
        } ))
        if (data.cod !== "404") {
          const {
            main: { humidity, temp, temp_max, temp_min },
            weather,
            name,
          } = data;
          console.log(humidity, temp, weather[0].description, name, weather[0].icon, temp_max, temp_min);
          let tempCelsius = Number.parseFloat(
            temp - kelvinConstant
          ).toPrecision(4);

          let weatherObj = {
            name,
            temp: Math.floor(tempCelsius),
            tempMax: Math.floor(temp_max - 273.15),
            tempMin: Math.floor(temp_min - 273.15),
            description: weather[0].description,
            icon:weather[0].icon,
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

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="app-input">
        <form onSubmit={getWeather}>
          <input
            onChange={handlerFieldCity}
            type="text"
            placeholder="City"
            name="city"
            value={city}
          />
        </form>
      </div>

      {!weatherCity.message ? (
        <Weather
          name={weatherCity.name}
          description={weatherCity.description}
          temperature={weatherCity.temp}
          tempMax={weatherCity.tempMax}
          tempMin={weatherCity.tempMin}
          humidity={weatherCity.humidity}
          icon={weatherCity.icon}
        />
      ) : (
        <p>{weatherCity.message}</p>
      )}
    </div>
  );
};
export default App;
