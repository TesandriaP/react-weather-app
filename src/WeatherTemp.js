import React from "react";

export default function WeatherTemp(props){
return(
    <div className="WeatherTemp">
      <span className="temp">
        {Math.round(props.celsius)}
        </span>
               <span className="unit">
                °F
               </span>    
    </div>
  );
}