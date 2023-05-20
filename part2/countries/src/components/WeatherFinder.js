import countriesService from "../services/countriesService.js";

let updWeather = {};

const findWeather = ({ cities, setWeatherData, weather, setWeather, i, countries }) => {
  if (Object.keys(weather).includes(countries[i])) {
    console.log(weather[countries[i]].foundWeather);
    setWeatherData(weather[countries[i]].foundWeather);
  } else {
  
  const requests = cities[i].map((city) => countriesService.getWeather(city));

  Promise.all(requests)
    .then((responses) => {
      const foundWeather = responses.map((response) => response.current);
      updWeather[countries] = { foundWeather };
      setWeatherData(foundWeather);
      setWeather(updWeather)
      console.log(updWeather);
    })
    .catch((error) => {
      setWeatherData([]);
      console.log("weather data not found", error);
    });}
};

export default findWeather;
