import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TranslateIcon from '@mui/icons-material/Translate';

const SearchResult = ({result, value}) => {
    console.log(result);
    let capitalInfo = result.map(country => {
        if (country.capital) {
                    return <><LocationCityIcon fontSize='small'/> <strong>capital{country.capital?.length > 1 ? 's' : ''}:</strong> {country.capital?.join(', ')}<br/></>
                } else {return null}
            }
        )
     
    const resultToDisplay = result.map(country =>
            <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {country.name.common} {country.flag}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            >
              <Typography>
                {capitalInfo[result.indexOf(country)]}
                <FmdGoodIcon fontSize='small'/> <strong>area: </strong> {country.area} km²<br/>
                {country.languages ? <strong><TranslateIcon fontSize='small'/> languages: </strong> : ''}
                {country.languages ? Object.values(country.languages).join(', ') : ''}
              </Typography>
                <img src={country.flags.png} alt={country.flags.alt} />
            </AccordionDetails>
          </Accordion>
        )

    const oneToDisplay = result.map(country =>
        <>
            {country.name.common} {country.flag}<br/>
            {capitalInfo[result.indexOf(country)]}
            <FmdGoodIcon fontSize='small'/> <strong>area: </strong> {country.area} km²<br/>
            {country.languages ? <strong><TranslateIcon fontSize='small'/> languages: </strong> : ''}
            {country.languages ? Object.values(country.languages).join(', ') : ''}
                <img src={country.flags.png} alt={country.flags.alt} />
        </>
        )

  if (value === '') {
        return null
    } 
    else if (result.length === 1) {
            return <div className='result'>{oneToDisplay}</div>
    }
    else if (result.length <= 10 && result.length > 1) {
        return <div className='result'>{resultToDisplay}</div>
    }
    else if (result.length > 10) {
        return (`${result.length} countries found, please specify your search`)
    }
  }

export default SearchResult