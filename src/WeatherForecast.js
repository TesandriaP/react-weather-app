import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let[loaded, setLoaded]= useState(falsse);
    let[forecast, setForecast]= useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

      if(loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index){
                        if(index < 5){
                        return(
                        <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                        </div>    
                      );    
                      }
                    })}
            </div>
        </div>
        );  
    } else{
            let apiKey= "73a00877081bd43422bdee0f3022beb5";
         let longitude= props.coords.lon;
         let latitude= props.coords.lat;
         let apiUrl= `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&nits=metric`;
     
         axios.get(apiUrl).then(handleResponse);

     return null;
  }
}