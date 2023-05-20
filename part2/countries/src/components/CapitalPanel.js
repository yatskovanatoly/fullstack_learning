import { Stack } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WeatherList from "./Weather";

const CapitalList = ({ result, weatherData, countryIndex }) => {
  let capitalInfo = result.map((country, i) => {
    if (country.capital) {
      return (
        <Stack key={i} direction={"column"}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"center"}
            gap={0.5}
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
            {result.length === 1 ? <WeatherList key={i} weatherData={weatherData} /> : null}
          </Stack>
        </Stack>
      );
    } else {
      return null;
    }
  });
  return capitalInfo[countryIndex];
};
export default CapitalList;
