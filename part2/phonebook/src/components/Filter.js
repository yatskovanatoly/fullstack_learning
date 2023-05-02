const Filter = ({newSearch, setNewSearch}) => 
<>search by name: <input value={newSearch} onChange={(e) => setNewSearch(e.target.value)}/></>

export default Filter