import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    let apiKey= "73a00877081bd43422bdee0f3022beb5";
    let longitude= props.coords.lon;
    let latitude= props.coords.lat;
    let apiUrl= `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&nits=metric`;

    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" />
                    <div className="WeatherForecast-temps">
                        <span className="WeatherForecast-temp-max">83</span>
                        <span className="WeatherForecast-temp-min">70</span>
                </div>
            </div>
         </div>
    </div>
    );
}