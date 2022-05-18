import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import '../Style/Style.css';

const Card =(props)=>{
    const d = new Date();
    let day = d.getDay();
    let weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        let rd = weekdays[day];
    let minTemp=500;
    props.prevData.hourly.map(value => {
        if(minTemp>value.temp)
        {
            minTemp=value.temp
            return minTemp;
        }
    });
    let maxTemp=0;
    props.prevData.hourly.map(value => {
        if(maxTemp<value.temp)
        {
            maxTemp=value.temp
          
            return maxTemp;
        }
    });
  
    return(
        <div style={{borderRadius:"2rem",backgroundColor: "#ffecd2" }} className="card">
            <h1 style={{paddingTop:"2rem"}}>{rd}</h1>
            <img style={{marginTop:"-1rem"}} className= "icon" src={`http://openweathermap.org/img/w/${props.prevData.current.weather[0].icon}.png`} /> 
            <div style={{display:"flex",marginLeft:"2rem",marginTop:"-1rem"}}> 
                 <h1 >{maxTemp}</h1>
                 <h1 style={{marginLeft:"2rem"}}>{minTemp}</h1>
            </div>
            
           
        </div>
    )
}

export default Card;