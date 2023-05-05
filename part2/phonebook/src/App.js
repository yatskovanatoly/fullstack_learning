import React, { useState, useEffect } from 'react';
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js';
import Persons from './components/Persons.js';
import axios from 'axios'

  const App = () => {
    const [persons, setPersons] = useState([])
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
      console.log('effect')
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
    }, [])
    console.log('render', persons.length, 'persons')

   

    return (
      <div>
        <h1>Phonebook</h1>
        <Filter persons={persons} newSearch={newSearch} setNewSearch={setNewSearch}/>
        <h2>add new contact</h2>
        <PersonForm persons={persons} setPersons={setPersons}/>
        <h3>Numbers</h3>
          <table>
            <tbody>
              <tr>
                <td width={150} ><strong>Name</strong></td>
                <td><strong>Phone</strong></td>
              </tr>
            </tbody>
          </table>
        <Persons persons={persons} newSearch={newSearch}/>
      </div>
    )
  }

  export default App