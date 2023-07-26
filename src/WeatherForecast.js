import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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