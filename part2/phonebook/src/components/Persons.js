const Persons = ({persons, newSearch}) => {
    const filtered = persons.filter(({name}) => name.match(new RegExp(`${newSearch}`,'gim')))
    console.log(newSearch, filtered);
      return filtered.map(person => 
        <p key={person.id} person={person}>{person.name} {person.number}</p>)
      }

export default Persons