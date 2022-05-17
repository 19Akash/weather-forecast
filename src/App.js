import {useState,useEffect} from 'react';
import Weather from './Component/Weather';
import axios from 'axios';


function App() {
  const [lat,setLat]=useState([]);
  const [long,setLong]=useState([]);
  const [data,setData]=useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      
        await navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      const temp = "https://api.openweathermap.org/data/2.5/weather/?lat=28.4451886&lon=77.5140147&units=metric&APPID=89d07fcddcc643e8775535d21dfb2e44"//`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
      await axios.get(temp)
      .then(res=>{
        setData(res.data)
      })
      if(data!=="")
      {
        console.log(data);
      }
    }
    fetchData();
  }, [lat,long])

  return (
   
    <div className="App">
      {
          (data!=="") ? <Weather weatherData={data}/> :<div></div>
      }
    </div>
  );
}

export default App;
