import axios from 'axios'

const baseUrl = 'https://api.weatherapi.com/v1/current.json'
const apiKey = process.env.REACT_APP_API_KEY

const getWeather = (city) => {
    const request = axios.get(`${baseUrl}?key=${apiKey}&q=${city}&aqi=no`)
    return request.then(response => response.data)
      }

export default { getWeather }