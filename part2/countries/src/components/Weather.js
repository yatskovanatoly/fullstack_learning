import { Stack } from "@mui/material";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  if (!weatherData) {
    return ['wtf'];
  }
  return weatherData.map((data) => (
    <Stack
      key={data?.location}
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={0}
    >
      <img
        className="weatherIcon"
        src={data?.condition?.icon}
        alt="weather icon"
      />
      {Math.round(data.temp_c)}°C
    </Stack>
  ));
};

export default Weather;
