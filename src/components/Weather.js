import React from 'react';

const Weather = (props) => (
    <div className="weather">
        { props.city &&
            <div className='weather-data'>
                <p>Place: {props.city}, {props.country}</p>
                <p>Temperature: {Math.round(props.temp)} °C, feels like: {Math.round(props.feelsLike)} °C</p>
                <p>Pressure: {props.pressure}</p>
                <p>Sunset: {props.sunset}</p>
            </div>
        }
        { props.error && 
            <p className='error'>Error: {props.error}</p>
        }  
    </div>
);

export default Weather;