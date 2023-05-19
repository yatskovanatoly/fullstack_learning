import countriesService from '../services/countriesService.js'

const findWeather = ({cities, setWeatherData}) => {
    console.log("weather data – request made");
    const requests = cities[0].map((city) => countriesService.getWeather(city));
    console.log(requests);
    Promise.all(requests)
      .then((responses) => {
        const foundWeather = responses.map((response) => response.current);
        console.log(foundWeather);
        setWeatherData(foundWeather);
      })
      .catch((error) => {
        setWeatherData([]);
        console.log("weather data not found", error);
      });
  };

export default findWeather;