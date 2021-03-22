import React from 'react';

const Weather = (props) => (
    <div className="weather">
        { props.city &&
            <div className='weather-data'>
                <div className='weather-data_item'>
                    <div className='string'>
                        <p className='variable'>Place:</p><p className='value'>{props.city}</p>
                    </div>
                    <div className='string'>
                        <p className='variable'>Country:</p><p className='value'>{props.country}</p>
                    </div>
                </div>
                <div className='weather-data_item'>
                    <div className='string'>
                        <p className='variable'>Temperature:</p><p className='value'>{Math.round(props.temp)} °C</p>
                    </div>
                    <div className='string'>
                        <p className='variable'>Feels like:</p><p className='value'>{Math.round(props.feelsLike)} °C</p>
                    </div>
                </div>
                <div className='weather-data_item'>
                    <div className='string'>
                        <p className='variable'>Pressure:</p><p className='value'>{props.pressure}</p>
                    </div>
                </div>
                {/* <p className='weather-data_item'>Sunset: {props.sunset}</p> */}
            </div>
        }
        { props.error && 
            <p className='error'>Error: {props.error}</p>
        }  
    </div>
);

export default Weather;