import React from 'react';

import { Card } from 'semantic-ui-react'


// const Weather = (props) =>{
// <CardExampleCard weatherData={props.weather}/>
// }

// export default Weather;

const Weather = (props) =>{
    return(
    <Card>
      <Card.Content>
          <Card.Header className="header">City Name: {props.weatherData.name}</Card.Header>
          {/* <p>Temprature: {props.weatherData.data.main.temp}</p>  */}
          {/* <p>Sunrise: {props.weatherData.sys.sunrise}</p>
          <p>Sunset: {props.weatherData.data.sys.sunset}</p>
          <p>Description: {props.weatherData.data.weather[0].description}</p> */}
      </Card.Content>
    </Card>
  )}
  
  export default Weather;
