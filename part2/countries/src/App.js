import './App.css';
import { useState, useEffect} from 'react'
import countriesService from './services/countriesService';
import SearchCountries from './components/SearchCountries';
import SearchResult from './components/SearchResult';
import { Container } from '@mui/material/';

function App() {
const [value, setValue] = useState('')
const [result, setResult] = useState([])
const [countriesData, setCountriesData] = useState([])
const [warning, setWarning] = useState('')
const newSearch = (new RegExp(`^${value}`,'gim'))

useEffect(() => {
  countriesService
  .getAll()
  .then(countries => setCountriesData(countries))
}, [])


const handleChange = (event) => {
  const invalidCharacters = /[^\sa-z]/gi
  if (invalidCharacters.test(event.target.value)) {
    setWarning('only latin characters allowed')
    setTimeout(() => {
      setWarning('');
    }, 2000);
  }
  setValue(event.target.value.replace(invalidCharacters,''))
} 

  return (
      <Container maxWidth="sm">
    <div>
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
    <div className='result'>
    <SearchResult
      result={result} 
      value={value} 
      setWarning={setWarning}
    />
    </div>
    </div>
    </Container>
  )
}

export default App;
