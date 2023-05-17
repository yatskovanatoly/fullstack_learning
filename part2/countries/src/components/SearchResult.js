import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Card,
  Paper,
  Stack
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import TranslateIcon from '@mui/icons-material/Translate'
import { styled } from "@mui/material/styles";
import countriesService from "../services/countriesService";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SearchResult = ({ result, value }) => {
  const [weatherData, setWeatherData] = useState("");
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const showWeather = (city) => {
      countriesService
      .getWeather(city)
      .then((res) => setWeatherData(res.current))
      .catch((error) => console.log("data not found"));
      console.log("weather data request made");
  };

  useEffect(() => {
    if (result.length === 1) {
      showWeather(result[0].capital);
    }
  }, [result]);

  let capitalInfo = result.map((country) => {
    if (country.capital) {
      return (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"center"}
          gap={0.5}
        >
          <LocationCityIcon fontSize="small" />
          <strong>Capital{country.capital?.length > 1 ? "s" : ""}:</strong>{" "}
          {country.capital?.join(", ")}
          <br />
        </Stack>
      );
    } else {
      return null;
    }
  });

  const resultToDisplay = result.map((country, i) => (
    <Accordion
      sx={{ marginBottom: 1 }}
      expanded={expanded === `panel${i + 1}`}
      onChange={handleExpand(`panel${i + 1}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography textAlign="center">
          {country.name.common} {country.flag}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Container>
            <Stack spacing={1}>
              <img
                className="flag"
                src={country.flags.png}
                alt={country.flags.alt}
              />
              {country.capital ? (
                <Item>{capitalInfo[result.indexOf(country)]}</Item>
              ) : (
                ""
              )}
              <Item>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                  gap={0.5}
                >
                  <FmdGoodIcon fontSize="small" />
                  <strong>Area:</strong> {country.area} km²
                </Stack>
              </Item>
              {country.languages ? (
                <Item>
                  {" "}
                  {country.languages ? (
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent={"center"}
                      gap={0.5}
                    >
                      <TranslateIcon fontSize="small" />
                      <strong> Languages: </strong>
                    </Stack>
                  ) : ("")}
                  {Object.values(country.languages).join(", ")}
                </Item>
              ) : (
                ""
              )}
            </Stack>
          </Container>
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));

  const detailedInfo = result.map((country) => (
    <Container>
      <Typography align="center" gutterBottom>
        {country.name.common} {country.flag}
      </Typography>
      <Stack spacing={1} margin={2}>
        <img className="flag" src={country.flags.png} alt={country.flags.alt} />
        {country.capital ? (
          <Item>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
              gap={0}
            >
              {capitalInfo[result.indexOf(country)]}{" "}
              <img className="weatherIcon" src={weatherData?.condition?.icon} alt='weather icon'/>{" "}
              {Math.round(weatherData?.temp_c)}°C
            </Stack>
          </Item>
        ) : (
          ""
        )}
        <Item>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"center"}
            gap={0.5}
          >
            <FmdGoodIcon fontSize="small" />
            <strong>Area:</strong> {country.area} km²
          </Stack>
        </Item>
        {country.languages ? (
          <Item>
            {" "}
            {country.languages ? (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                gap={0.5}
              >
                <TranslateIcon fontSize="small" />
                <strong> Languages: </strong>
              </Stack>
            ) : (
              ""
            )}
            {Object.values(country.languages).join(", ")}
          </Item>
        ) : (
          ""
        )}
      </Stack>
    </Container>
  ));

  if (value === "") {
    return null;
  } else if (result.length === 0) {
    return <Typography align="center">Nothing was found</Typography>;
  } else if (result.length === 1) {
    return <Card sx={{ minWidth: 200 }}>{detailedInfo}</Card>;
  } else if (result.length <= 10 && result.length > 1) {
    return <div className="result">{resultToDisplay}</div>;
  } else if (result.length > 10) {
    return (
      <Typography align="center">
        {result.length} countries found, please specify your search
      </Typography>
    );
  }
};

export default SearchResult;
