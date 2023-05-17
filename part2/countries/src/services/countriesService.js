import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";
const weatherUrl = "https://api.weatherapi.com/v1/current.json";
const apiKey = process.env.REACT_APP_API_KEY

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};
const getWeather = (city) => {
  return axios
    .get(`${weatherUrl}?key=${apiKey}&q=${city}&aqi=no`)
    .then((res) => res.data);
};

const exported = { getAll, getWeather };

export default exported;
