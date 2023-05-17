import { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

const SearchCountries = ({value, countriesData, newSearch, setResult, handleChange}) => {
  useEffect(() => {
    if (value) {
        setResult(
          countriesData.filter(country => country.name.common.match(newSearch))
          )
        }
      }, [value])
      

    return countriesData.length < 1 ? 
    <Container>
      <TextField 
        fullWidth
        disabled 
        label="loading countries..." 
        value={value} 
        onChange={handleChange}/>
    </Container> : 
    <Container>
      <TextField  
        fullWidth
        autoComplete='off'
        autoCorrect='off'
        className='textField' 
        id="outlined-basic" 
        label="find countries" 
        variant="outlined" 
        value={value} 
        onChange={handleChange}/>
    </Container>
}

export default SearchCountries