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
import CountryPanel from "./CountryPanel";

const CountriesList = ({ result, weatherData }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return result.map((country, i) => (
    <Container
      sx={{ marginBottom: 1, maxWidth: 400 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Accordion
        key={i + 1}
        sx={{ marginBottom: 1 }}
        // defaultExpanded={defaultExpanded}
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
          <CountryPanel
            country={country}
            i={i}
            result={result}
            weatherData={weatherData}
          />
        </AccordionDetails>
      </Accordion>
    </Container>
  ));
};

export default CountriesList;
