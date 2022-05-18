import React, {useState, useEffect } from 'react';
import '../Style/Style.css';
import Chart from './Chart';
import Card from './Card';

const Weather = (props) =>{
    var today = new Date()
    var curHr = today.getHours()

    const [light,setLight]=useState("");
    const [curr,setCurr]=useState(props.weatherData.current.temp);
    const [sign,setSign]=useState(`\u00b0F`)
   
    useEffect(()=>{
        if (curHr < 18) {
            setLight("dayBackground");
        } 
        else {
            setLight("nightBackground");
        }
    },[light])
    
    const handleTemp=()=>{
         setCurr(props.weatherData.current.temp);
         setSign(`\u00b0F`);
    }
    const handleHumidity=()=>{
        setCurr(props.weatherData.current.humidity);
        setSign(`%`);
    }
    const handleWind=()=>{
        setCurr(props.weatherData.current.wind_speed);
        setSign(`km/h`);
    }
   
    return(
       <div className={light}>
           <div className='headerContent'>
                <img style={{width: "10rem" }} className= "icon" src={`http://openweathermap.org/img/w/${props.weatherData.current.weather[0].icon}.png`} /> 
                <h1 className="temp">{curr} {sign}</h1>
                <div>
                    <h2 className='humadity'>Humidity : {props.weatherData.current.humidity} %</h2>
                    <h2 className='wind'>Wind : {props.weatherData.current.wind_speed} km/h</h2>     
                </div>
           </div>
           <div className='secondHeader'>
               <h2 className='secondHeaderContent' onClick={handleTemp}><strong>Temperature </strong></h2> 
               <h2 className='secondHeaderContent' onClick={handleHumidity}><strong>Humidity </strong></h2> 
               <h2 className='secondHeaderContent' onClick={handleWind}><strong>Wind</strong></h2> 
            </div> 
           <Chart prevData={props.weatherData}/> 
           <Card  prevData={props.weatherData}/>

    </div>
  )}
  
  export default Weather;
