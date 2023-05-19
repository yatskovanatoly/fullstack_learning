import { Typography, Container, Card, Stack, Box } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TranslateIcon from "@mui/icons-material/Translate";
import CapitalPanel from "./CapitalPanel";

const CountryPanel = ({ result, Item, weatherData }) => {
  return result.map((country, i) => (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Card key={i + 1} sx={{ minWidth: 300, maxWidth: 400 }}>
        <Typography align="center" gutterBottom>
          {country.name.common} {country.flag}
        </Typography>
        <Stack spacing={1} margin={2}>
          <img
            className="flag"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          {country.capital ? (
            <Item>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                gap={0}
              >
                <CapitalPanel
                  result={result}
                  countryIndex={i}
                  weatherData={weatherData}
                />{" "}
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
                  <strong>
                    {" "}
                    Language
                    {Object.values(country.languages).length > 1
                      ? "s"
                      : ""}:{" "}
                  </strong>
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
      </Card>
    </Box>
  ));
};

export default CountryPanel;
