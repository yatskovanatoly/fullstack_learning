import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Item from "./Item";
import CountryPanel from "./CountryPanel";

const CountriesList = ({ result, weatherData }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return result.map((country, i) => (
    <Box display="flex" alignItems="center" justifyContent="center">
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
            <CountryPanel
              result={result}
              Item={Item}
              weatherData={weatherData}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  ));
};

export default CountriesList;
