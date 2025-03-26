import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo, setLoading}){
  
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = "b97dcfaa7eb293f7f0193d397205f2fc";

    let weatherInfo = async ()=>{
        try{
        setLoading(true)
        let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jasonResponce = await responce.json();
        let lat = jasonResponce[0].lat;
        let lon = jasonResponce[0].lon;
        
        let WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        let weatherRes = await fetch(WEATHER_API);
        let mainRes = await weatherRes.json();
        console.log(mainRes.weather[0].description);
        let description = mainRes.weather[0].description;
        let result = {...mainRes.main,description,city};
        console.log(result);
        return result;
        }catch(err){
            throw(err);
        }finally{
            setLoading(false);
        }
    }

        let handleChange = (evt)=>{
            setCity(evt.target.value);
            setError(false) ;
        }
        let handleSubmit= async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
           } catch(err){
            setError(true);
             }
        };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                 <TextField id="city" label="City Name" variant="outlined" value={city}
                 onChange={handleChange}/>
                 <br />
                 <br /><br />
                 <Button variant="contained" type='submit'>Send City</Button>
                 {error && <p style={{color:"red"}}>please check your internet connection <br/> or type a valid name</p>}
                 <br />
             </form>
        </div>
    );
}