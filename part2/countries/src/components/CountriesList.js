import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import CountryPanel from "./CountryPanel";

const CountriesList = ({ result, weatherData }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return result.map((country, i) => (
    <Container key={i + 1} sx={{ marginBottom: 1, maxWidth: 400 }}>
      <Accordion
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
