import "./App.css";
import { useState, useEffect, useLayoutEffect } from "react";
import countriesService from "./services/countriesService";
import SearchField from "./components/SearchField";
import SearchResult from "./components/SearchResult";
import { Container } from "@mui/material/";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const newSearch = new RegExp(`^${value}`, "gim");

  useEffect(() => {
    console.log(Date.now());    
    countriesService
      .getAll()
      .then((countries) => setCountriesData(countries))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container margin={1} maxWidth="sm">
      <SearchField
        value={value}
        setCountriesData={setCountriesData}
        countriesData={countriesData}
        newSearch={newSearch}
        setResult={setResult}
        setValue={setValue}
      />
      <SearchResult result={result} value={value} />
    </Container>
  );
}

export default App;
