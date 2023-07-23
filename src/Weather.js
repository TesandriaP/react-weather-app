import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather
(){
    const apiKey= "73a00877081bd43422bdee0f3022beb5";
    return <div className="Weather">
        <form>
         <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-ctrl" 
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
         </div>
        </form>
        <h1>Salt Lake City</h1>
        <ul>
            <li>Sunday 02:00</li>
            <li>Partly Cloudy</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy"
                className="float-left"
                />
                <div className="float-left">
               <span className="temp">6</span>
               <span className="unit">°C</span> 
               </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 1%</li>
                    <li>Humidity: 16%</li>
                    <li>Wind: 11 m/h</li>
                </ul>
            </div>
        </div>
        </div>
}