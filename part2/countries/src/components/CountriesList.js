import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TranslateIcon from "@mui/icons-material/Translate";
import { useState } from "react";
import CapitalPanel from "./CapitalPanel";
import Item from "./Item";

const CountriesList = ({ result, weatherData }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return result.map((country, i) => (
    <Accordion
      key={i + 1}
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
        <Typography component={"span"}>
          <Container>
            <Stack spacing={1}>
              <img
                className="flag"
                src={country.flags.png}
                alt={country.flags.alt}
              />
              {country.capital ? (
                <Item>
                  <CapitalPanel result={result} countryIndex={i} weatherData={weatherData} />
                </Item>
              ) : (
                // <></>
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
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));
};

export default CountriesList;
