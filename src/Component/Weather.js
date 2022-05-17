import React, {useState, useEffect } from 'react';
import '../Style/Style.css';

const Weather = (props) =>{
    var today = new Date()
    var curHr = today.getHours()

    const [light,setLight]=useState("");
    const [curr,setCurr]=useState(props.weatherData.main.temp);
    const [sign,setSign]=useState(`\u00b0C`)
   
    useEffect(()=>{
        if (curHr < 18) {
            setLight("dayBackground");
        } 
        else {
            setLight("nightBackground");
        }
    },[light])
    
    const handleTemp=()=>{
         setCurr(props.weatherData.main.temp);
         setSign(`\u00b0C`);
    }
    const handleHumidity=()=>{
        setCurr(props.weatherData.main.humidity);
        setSign(`%`);
    }
    const handleWind=()=>{
        setCurr(props.weatherData.wind.speed);
        setSign(`km/h`);
    }
   
    return(
       <div className={light}>
           <div className='headerContent'>
                <img className= "icon" src={`http://openweathermap.org/img/w/${props.weatherData.weather[0].icon}.png`} />
                <h3 className="temp">{curr} {sign}</h3>
                <div>
                    <h5 className='humadity'>Humidity : {props.weatherData.main.humidity} %</h5>
                    <h5 className='wind'>Wind : {props.weatherData.wind.speed} km/h</h5>
                    
                </div>
           </div>
           <div className='secondHeader'>
               <p className='secondHeaderContent' onClick={handleTemp}><strong>Temperature</strong></p> 
               <p className='secondHeaderContent' onClick={()=>handleHumidity()}><strong>Humidity</strong></p> 
               <p className='secondHeaderContent' onClick={()=>handleWind()}><strong>Wind</strong></p> 
           </div>
          
          <p>Sunrise: {props.weatherData.sys.sunrise}</p>
          <p>Sunset: {props.weatherData.sys.sunset}</p>
          <p>Description: {props.weatherData.weather[0].description}</p>
      
    </div>
  )}
  
  export default Weather;
