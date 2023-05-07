import { React, useState } from "react";
import personService from "../services/personService";
import Notification from './Notification.js'


const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [message, setMessage] = useState({})

    const newPerson = {
      name: newName,
      number: newNumber, 
      // id: persons.length + 1
    }
    const checkIfNameExists = () => {
      return persons.map(person => JSON.stringify(person.name).toUpperCase() === JSON.stringify(newPerson.name).toUpperCase())
    }

    const checkIfNumberExists = () => {
      const regex = /^8|\+(?<=\+)\d|-/gm
      return persons.map(person => person.number?.replace(regex, '') === newPerson.number?.replace(regex, ''))
    }

    const addNewPerson = (event) => {
      event.preventDefault()    
      if (checkIfNameExists().find(e => e === true) && (checkIfNumberExists().find(e => e === true))) {
        setMessage({content: `Both ${newName} and ${newNumber} are already added`, className: 'warning'})
                setTimeout(() => {
                  setMessage(lastMessage => ({...lastMessage, className: ''}))
                }, 3000)
      }
        else if (checkIfNameExists().find(e => e === true)) {
          const person = persons.find(n => (n.name).toUpperCase() === (newName).toUpperCase())
          if (window.confirm(`${person.name} is already on the phonebook. Update their number?`)) {
            const changedPerson = { ...person, number: newNumber}
            personService
              .update(person.id, changedPerson)
              .then(returnedPerson => {
                setPersons(persons.map(person => (person.name).toUpperCase() !== (newPerson.name).toUpperCase() ? person : returnedPerson))
                setNewName('')
                setNewNumber('')
                setMessage({content: `${person.name}'s number was updated succesfully`, className: 'success'}
                )
                setTimeout(() => {
                  setMessage(lastMessage => ({...lastMessage, className: ''}))              
                }, 3000)
              })
              .catch(error => {
                setMessage({content: `Person ${person.name} was already removed from the server`, className: 'error'}
                )
                setTimeout(() => {
                  setMessage(lastMessage => ({...lastMessage, className: ''}))              
                }, 5000)
              })
          }
      } 
        else if (checkIfNumberExists().find(e => e === true)) {
          setMessage({content: `The number ${newNumber} is already added`, className: 'warning'})
                setTimeout(() => {
                  setMessage(lastMessage => ({...lastMessage, className: ''}))              
                }, 5000)
      } 
        else {
          personService
          .create(newPerson)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
            setNewNumber('')
            setNewName('')
            setMessage({content: `${newPerson.name} has been added`, className: 'success'})
                setTimeout(() => {
                  setMessage(lastMessage => ({...lastMessage, className: ''}))
                }, 3000)
          })
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
            <div style={{display:'flex', flexDirection:'row'}}>
              <button style={{margin: '0 10px 0 5px'}} type='submit'>add</button>
              <Notification message={message}/>
            </div>
          </form>
      )
    }

    export default PersonForm