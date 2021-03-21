import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'd1812ab7b9819ec4f4e4bbd3f4a04ded';

class App extends React.Component {

  state = {
    city: null,
    country: null,
    temp: null,
    sunrise: null,
    sunset: null,
    feelsLike: null,
    error: ''
  };

  getWeather = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;
    

    if (city) {
      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await API_URL.json();
      console.log(data)

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunsetDate = date.getHours() + ':' + date.getMinutes();

      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        pressure: data.main.pressure,
        sunset: sunsetDate,
        error: ''
      });
    } else {
      this.setState({
        city: null,
        country: null,
        temp: null,
        sunrise: null,
        sunset: null,
        feelsLike: null,
        error: 'You have not typed city'
      });
    }
  };

  render() {
    return (
      <div className="app-container">
        <Info />
        <Form weatherMethod={this.getWeather}/>
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          feelsLike={this.state.feelsLike}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  };
};

export default App;