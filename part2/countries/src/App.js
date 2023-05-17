import './App.css';
import { useState, useEffect} from 'react'
import countriesService from './services/countriesService';
import SearchCountries from './components/SearchCountries';
import SearchResult from './components/SearchResult';
import { Container } from '@mui/material/';
import { Alert } from '@mui/material';
import Slide from '@mui/material/Slide';

function App() {
const [value, setValue] = useState('')
const [result, setResult] = useState([])
const [countriesData, setCountriesData] = useState([])
const [warning, setWarning] = useState('')
const newSearch = (new RegExp(`^${value}`,'gim'))

useEffect(() => {
  console.log('request made');
  countriesService
  .getAll()
  .then(countries => setCountriesData(countries))
}, [])


const handleChange = (event) => {
  const invalidCharacters = /[^\sa-z]/gi
  if (invalidCharacters.test(event.target.value)) {
    setWarning(<Slide in direction='down' unmountOnExit><Alert severity="info">Only latin symbols allowed</Alert></Slide>)
    setTimeout(() => {
      setWarning(<Slide out unmountOnExit><Alert severity="info">Only latin symbols allowed</Alert></Slide>);
    }, 3000);
  }
  setValue(event.target.value.replace(invalidCharacters,''))
} 

  return (
  <Container margin={1} maxWidth="sm">
      <SearchCountries 
        handleChange={handleChange} 
        value={value} 
        setCountriesData={setCountriesData} 
        countriesData={countriesData} 
        newSearch={newSearch} 
        setResult={setResult} 
        setWarning={setWarning}
      />
      <br/>
      {warning}
      <SearchResult
        result={result} 
        value={value} 
        setWarning={setWarning}
      />
  </Container>
  )
}

export default App;
