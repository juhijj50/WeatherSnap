import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css"

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({city: "City",
        feelsLike: 0,
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        weather: "??",});

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);  
    }    
    return(
        <div>
           <h1>
                <i className="fas fa-sun weather-icon"></i> Weather Snap
            </h1>
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>  
        </div>
    );
}