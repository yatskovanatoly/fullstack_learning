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

      let disabled = true
      let label = 'loading countries...'
      if (countriesData.length > 1) {
        disabled = false
        label = 'find countries'
      }
      
   return (
    <Container>
      <TextField  
        fullWidth
        disabled={disabled}
        label={label}
        autoComplete='off'
        autoCorrect='off'
        className='textField' 
        id="outlined-basic" 
        variant="outlined" 
        value={value} 
        onChange={handleChange}/>
    </Container>
   )
}

export default SearchCountries