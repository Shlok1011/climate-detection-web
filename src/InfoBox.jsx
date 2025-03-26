import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info, loading}){
    
    
    const INIT_URL="https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://media.istockphoto.com/id/1040375916/photo/teenage-girl-blowing-nose-on-winter-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=6dQy41KF9LXDAB6JaMm4YaVNlQ8GF4rVOguK_RYc3Mg=";
    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1671148804428-479b78611ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D";
    
    return(
        <div className="InfoBox" style={{ opacity: loading ? 0.4 : 1}}>
                {loading && <h3 style={{color:"red"}}>fetching....</h3>}

            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                 <CardMedia
                 sx={{ height: 140 }}
                 image={info.humidity >= 91 ? RAIN_URL : info.temp > 19 ? HOT_URL : (info.temp < 12) ? COLD_URL : INIT_URL }
                 />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} &nbsp;&nbsp;  {info.humidity >= 91 ? <ThunderstormIcon/> : info.temp > 19 ? <WbSunnyIcon/> : (info.temp < 12) ? <AcUnitIcon/> : <CloudIcon/> }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                   <p>Temperature = {info.temp}&deg;c</p>
                   <p>Humidity = {info.humidity}</p>
                   <p>Min Temp = {info.temp_min}&deg;c</p>
                   <p>Max Temp = {info.temp_max}&deg;c</p>
                   <p>The weather can be described as <b><i>{info.description}</i></b> and temperature feels like = {info.feels_like}&deg;c</p>
                </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}