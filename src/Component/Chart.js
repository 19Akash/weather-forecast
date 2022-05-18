import React ,{useState,useEffect} from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
const Chart = (props)=> {
    
    const [data,setData]=useState("");
    let newdataPoints=[];
    useEffect(()=>{
      newdataPoints=props.prevData.hourly.map(element => {
        var myDate = new Date( element.dt *1000);
        let date=myDate;
       return ( {
           x: date,
           y: element.temp
           }
       )
      });
      if(data==="")
      {
      setData(newdataPoints);
      }
    })


   

    const options = {
        animationEnabled: true,
        data: [{
            type: "splineArea",
            dataPoints: data
        }]
    }
    return (
       
        <div>
			<CanvasJSChart options = {options}/>
		</div>
    )

}

export default Chart;