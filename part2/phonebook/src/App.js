import React, { useState } from 'react';
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js';
import Persons from './components/Persons.js';

  const App = () => {
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 0 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 2 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
    ])
    const [newSearch, setNewSearch] = useState('')
   

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