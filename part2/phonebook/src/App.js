import React, { useState } from 'react';

  const Filter = ({newSearch, setNewSearch}) => 
    <>search by name: <input value={newSearch} onChange={(e) => setNewSearch(e.target.value)}/></>
  
  const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length
    }
    const checkIfNameExist = () => {
      return persons.map(person => JSON.stringify(person.name).toUpperCase() === JSON.stringify(newPerson.name).toUpperCase())
    }

    const checkIfNumberExist = () => {
      const regex = /^8|\+(?<=\+)\d|-/gm
      return persons.map(person => person.number?.replace(regex, '') === newPerson.number?.replace(regex, ''))
    }

    const addNewPerson = (event) => {
      event.preventDefault()    
      if (checkIfNameExist().find(e => e === true) && (checkIfNumberExist().find(e => e === true))) {
        alert(`Both ${newName} and ${newNumber} are already added`)
      }
        else if (checkIfNameExist().find(e => e === true)) {
          alert(`${newName} is already added`)
      } 
        else if (checkIfNumberExist().find(e => e === true)) {
          alert(`The number ${newNumber} is already added`)
      } 
        else {
          setPersons(persons.concat(newPerson))
          setNewName('') 
          setNewNumber('')
        }
    }

    const addNewName = (event) => {
      setNewName(event.target.value)
    }
    const addNewNumber = (event) => {
      setNewNumber(event.target.value)
    }
      return (
        <form onSubmit={addNewPerson}>
            <div>
              <table>
                <tbody>
                  <tr><td>name:</td><td><input type='text' value={newName} onChange={addNewName} required /></td></tr>
                  <tr><td>number:</td><td><input type="text" pattern="[0-9\-\+]*" value={newNumber} onChange={addNewNumber} /></td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <button type='submit'>add</button>
            </div>
          </form>
      )
    }

  const Persons = ({persons, newSearch}) => {
    const filtered = persons.filter(({name}) => name.match(new RegExp(`${newSearch}`,'gim')))
    console.log(newSearch, filtered);
      return filtered.map(person => 
        <p key={person.id} person={person}>{person.name} {person.number}</p>)
      }
    

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
        <table style={{wordBreak: 'break-all', paddingRight: '1px'}}>
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