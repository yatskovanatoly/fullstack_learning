import axios from "axios";

const countriesUrl = "https://restcountries.com/v3.1/all";
const weatherUrl = "https://api.weatherapi.com/v1/current.json";
// const weatherUrl = '../dummyWeather/cities/'
const apiKey = process.env.REACT_APP_API_KEY;

const getAll = () => {
  return axios.get(countriesUrl).then((res) => res.data);
};
const getWeather = (city) => {
  return axios
    .get(`${weatherUrl}?key=${apiKey}&q=${city}&aqi=no`)
    .then((res) => res.data);
};
// const getWeather = (city) => {
//   return axios
//     .get(`dummyWeather.json`)
//     .then((res) => res.data);
// };

const exported = { getAll, getWeather };

export default exported;
