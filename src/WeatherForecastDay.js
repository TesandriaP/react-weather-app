import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function maxTemp(){
        let temp= Math.round(props.data.max);
        return`${temp}°`;
    }

    function minTemp(){
        let temp= Math.round(props.data.min);
        return`${temp}°`;
    }

    function day(){
        let date= new Date(props.data.dt * 1000);
        let day= date.getDay();
        let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }

    return(
     <div className="WeatherForecast-day">
    <div className="forecast-time">{day()}</div>
     <WeatherIcon code={props.data.condition.icon} size={38} /> 
    <div className="forecast-temps"> <span className="forecast-temp-max">{maxTemp}°</span>
    <span className="forecast-temp-min">{minTemp}°
            </span>
         </div> 
     </div>
    );
}