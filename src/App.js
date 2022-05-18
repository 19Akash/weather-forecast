import {useState,useEffect} from 'react';
import Weather from './Component/Weather';
import axios from 'axios';
import daysData from './Data/data'


function App() {

  const [lat,setLat]=useState("");
  const [lon,setLon]=useState("");
  const [data,setData]=useState("");
  const [count,setCount]=useState("");


  const fetchData = async () => { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
      function(position) {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      });
    }
    else {
      alert("Geolocation not available");
    }
  }
  fetchData();
  

  useEffect(() => {
    console.log(lat+" "+lon);
    let tempData=[];
    if(lat!=="")
    {
      console.log("hello");
      let temp = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=1652774793&appid=31194398dda86af6f1ce077b44e2da50`//`${process.env.REACT_APP_API_URL}onecall/timemachine?lat=${lat}&lon=${lon}&dt=${myEpoch}&appid=${process.env.REACT_APP_API_KEY}`;
      tempData=axios.request(temp)
      .then(res=>{
        setData(res.data);
      })
    }
 },[lat,lon])


  


  return (
    <div className="App">
      {   
      (data!=="") ? <Weather weatherData={data} /> :<div></div>
      }
     
    </div>
  );
}

export default App;
