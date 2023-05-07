import personService from "../services/personService";

const Persons = ({persons, newSearch, setPersons}) => {
  const removePerson = id => {
    const toRemove = persons.find(e => e.id === id)
    if (window.confirm(`Remove ${toRemove.name} from your phonebook?`)) {
    personService
      .remove(id)
      .then(
        setPersons(persons.filter(n => n.id !== id)),
        console.log(`${toRemove.name} is removed`))
    }}
  const filtered = persons.filter(({name}) => name.match(new RegExp(`${newSearch}`,'gim')))
      return filtered.map(person => 
        <p 
        key={person.id}  
        person={person}>
         {person.name} {person.number} 
        <button onClick={() => removePerson(person.id)} className="removeButton">×</button> 
        </p>)
      }

export default Persons