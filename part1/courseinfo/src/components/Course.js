const Course = ({courses}) => {  
  
    const total = courses.parts.reduce((s,p) => {
      return s + p.exercises}, 0)
      
    return (
      <>
        <h1>{courses.name}</h1>
        {courses.parts.map(part => 
                <p key={part.id} part={part}>{part.name} {part.exercises}</p>
                )}
        <strong>total of {total} exercises</strong>
      </>
    )
  }

export default Course