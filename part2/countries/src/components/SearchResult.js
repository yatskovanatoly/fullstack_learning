import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CountryInfo from "./CountryPanel";
import CountriesList from "./CountriesList";
import Item from "./Item";
import CapitalPanel from "./CapitalPanel";
import findWeather from "./WeatherFinder";
import countriesService from "../services/countriesService.js";



const SearchResult = ({ result, value }) => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    if (result[0]?.capital) {
      const cities = result.map((country) => country.capital);
      console.log(cities);
      findWeather({ cities, setWeatherData });
    }
  }, [result]);

  if (value === "") {
    return null;
  } else if (result.length === 0) {
    return <Typography align="center">Nothing was found</Typography>;
  } else if (result.length === 1) {
    return (
      <CountryInfo
        country={result[0]}
        i={0}
        result={result}
        Item={Item}
        weatherData={weatherData}
        CapitalPanel={CapitalPanel}
      />
    );
  } else if (result.length <= 10 && result.length > 1) {
    return (
      <CountriesList
        result={result}
        Item={Item}
        weatherData={weatherData}
        CapitalPanel={CapitalPanel}
      />
    );
  } else if (result.length > 10) {
    return (
      <Typography align="center">
        {result.length} countries found, please specify your search
      </Typography>
    );
  }
};

export default SearchResult;
