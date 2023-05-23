import { Stack } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Weather from "./Weather";

const CapitalPanel = ({ result, weatherData, countryIndex, weather }) => {
  let capitalInfo = result.map((country, i) => {
    if (country.capital) {
      return (
        <Stack key={i} direction={"column"}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"center"}
            gap={0.5}
            margin={1}
            marginBottom={1}
          >
            <LocationCityIcon fontSize="small" />
            <strong>
              Capital{country.capital.length > 1 ? "s" : ""}:
            </strong>{" "}
            {country.capital.join(`, `)}
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"center"}
            gap={2}
          >
            {/* {result.length === 1 ? (
              <WeatherList key={i} weatherData={weatherData} />
            ) : null} */}
            <Weather key={i} weatherData={weatherData} />
          </Stack>
        </Stack>
      );
    } else {
      return null;
    }
  });
  return capitalInfo[countryIndex];
};
export default CapitalPanel;
