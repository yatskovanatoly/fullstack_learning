import { Stack } from "@mui/material";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
  return Object.values(weatherData).map((data, i) => (
    <Stack
      key={i}
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={0}
    >
      <img
        className="weatherIcon"
        src={data.condition.icon}
        alt="weather icon"
      />
      {Math.round(data.temp_c)}°C
    </Stack>
  ))
};

export default Weather;