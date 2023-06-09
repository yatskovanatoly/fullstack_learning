import { Typography } from "@mui/material";
import CountryPanel from "./CountryPanel";
import CountriesList from "./CountriesList";
import Item from "./Item";
import CapitalPanel from "./CapitalPanel";
// import countriesService from "../services/countriesService.js";

const SearchResult = ({
  result,
  value,
  weatherData,
  cities,
  setWeatherData,
  setWeather,
  countries,
  weather,
  i,
}) => {
  if (value === "") {
    return null;
  } else if (result.length === 0) {
    return <Typography align="center">Nothing was found</Typography>;
  } else if (result.length === 1) {
    return (
      <CountryPanel
        country={result[0]}
        i={0}
        result={result}
        Item={Item}
        weatherData={weatherData}
        CapitalPanel={CapitalPanel}
        weather={weather}
      />
    );
  } else if (result.length <= 10 && result.length > 1) {
    return (
      <CountriesList
        result={result}
        Item={Item}
        weatherData={weatherData}
        CapitalPanel={CapitalPanel}
        cities={cities}
        setWeatherData={setWeatherData}
        weather={weather}
        setWeather={setWeather}
        countries={countries}
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
