import axios from "axios";

const countriesUrl = "https://restcountries.com/v3.1/all";
const weatherUrl = "https://api.weatherapi.com/v1/current.json";
const dummyUrl = 'http://localhost:3000/dummyWeathe.json'
const apiKey = process.env.REACT_APP_API_KEY;

const getAll = () => {
  return axios.get(countriesUrl).then((res) => res.data);
};
const getWeather = (city) => {
  return axios
    .get(`${weatherUrl}?key=${apiKey}&q=${city}&aqi=no`)
    .then((res) => res.data);
};
const recordWeather = () => {
  return axios
  .post(`http://localhost:3000/cache.json`, dummyUrl)
  .then((res) => res.data);
}
const exported = { getAll, getWeather, recordWeather };

export default exported;
