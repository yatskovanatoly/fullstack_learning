import countriesService from "../services/countriesService.js";
const findWeather = ({ cities, setWeatherData }) => {
  const requests = cities[0].map((city) => countriesService.getWeather(city));
  Promise.all(requests)
    .then((responses) => {
      const foundWeather = responses.map((response) => response.current);
      setWeatherData(foundWeather);
    })
    .catch((error) => {
      setWeatherData([]);
      console.log("weather data not found", error);
    });
};

export default findWeather;
