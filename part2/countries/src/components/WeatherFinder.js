import countriesService from "../services/countriesService.js";

let updWeather = {};

const findWeather = ({
  cities,
  setWeatherData,
  weather,
  setWeather,
  i,
  countries,
}) => {
  if (Object.keys(weather).includes(countries[i])) {
    setWeatherData(weather[countries[i]].foundWeather);
  } else {
    const requests = cities[i]?.map((city) => countriesService.getWeather(city));

    Promise.all(requests)
      .then((responses) => {
        console.log("weather data request made");
        const foundWeather = responses.map((response) => response.current);
        updWeather[countries[i]] = { foundWeather };
        setWeatherData(foundWeather);
        setWeather(updWeather);
      })
      .catch((error) => {
        setWeatherData([]);
        console.log("weather data not found", error);
      });
  }
};

export default findWeather;
