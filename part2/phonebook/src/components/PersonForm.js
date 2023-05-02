import { React, useState } from "react";

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

    export default PersonForm