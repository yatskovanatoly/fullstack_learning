import "./App.css";
import { useState, useEffect, useMemo } from "react";
import countriesService from "./services/countriesService";
import SearchField from "./components/SearchField";
import SearchResult from "./components/SearchResult";
import { Container } from "@mui/material/";
import findWeather from "./components/WeatherFinder";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const newSearch = new RegExp(`^${value}`, "gim");
  const [weatherData, setWeatherData] = useState({});
  const [weather, setWeather] = useState({});
  const cities = result.map((country) => country.capital);
  const countries = result.map((country) => country.name.common);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    result.map((country, i) => {
      if (
        country.capital &&
        result.length === 1 
        // && !Object.keys(weather).includes(country.name.common)
      ) {
        findWeather({
          cities,
          setWeatherData,
          weather,
          setWeather,
          i,
          countries,
        });
      }
    });
  }, [result]);

  useEffect(() => {
    countriesService
      .getAll()
      .then((countries) => setCountriesData(countries))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container margin={1} maxWidth="sm">
        <SearchField
          value={value}
          setCountriesData={setCountriesData}
          countriesData={countriesData}
          newSearch={newSearch}
          setResult={setResult}
          setValue={setValue}
        />
        <SearchResult result={result} value={value} weatherData={weatherData} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
