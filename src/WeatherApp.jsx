import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Surat",
        description: "clear sky",
        feels_like: 29.03,
        grnd_level: 1010,
        humidity: 57,
        pressure: 1011,
        sea_level: 1011,
        temp: 27.93,
        temp_max: 27.93,
        temp_min: 27.93
    });
    const [loading, setLoading] = useState(false)

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    
    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{textDecoration:"underline",color:"blue"}}>Weather App by Shlok</h2>
            <SearchBox updateInfo={updateInfo} setLoading={setLoading}/>
            <InfoBox info={weatherInfo} loading={loading}/>
             
        </div>
    );
}