import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather
(props){
     const [weatherData, setWeatherData]= useState({ready:false});
     const [city, setCity]= useState(props.defaultCity);

 function handleResponse(response) {
setWeatherData({
    ready: true,
    coords: response.data.coord,
    temperature: response.data.main.temp,
    date: new Date(response.data.dt * 1000),
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
});
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
    setCity(event.target.value);
}

function search(){
    const apiKey= "73a00877081bd43422bdee0f3022beb5";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
}

    if(weatherData.ready){
     return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
         <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-ctrl" 
            autoFocus="on"
            onChange={handleCityChange}
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
         </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coords={weatherData.coords} />
        </div> 
     );  
    } else{
        search();
    return "Loading..";
    }      
}