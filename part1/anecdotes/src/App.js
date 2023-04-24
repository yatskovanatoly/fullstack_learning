import './App.css';
import { useState } from 'react';

const Button = ({onclick, text}) => {
  return <button onClick={onclick}>{text}</button>
}

const Votes = ({votes}) => {
  return <p>has {votes} votes</p>
}

const MostRated = ({anecdotes, points}) => {
  let leadingIndex = points.indexOf(Math.max(...points))
  let mostVotes = Math.max(...points)
  
  if (mostVotes !== 0) {
  return (
    <> 
    <h2>Anecdote with most votes</h2>
    {anecdotes[leadingIndex]}
    <br/>
    has {mostVotes} votes
    </>)
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [points, addPoints] = useState(new Array(anecdotes.length).fill(0))
  
 
  const selectQuote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  console.log(selected);
  
  const updPoints = [...points]
  const handleVote = () => {
    updPoints[selected] += 1
    addPoints(updPoints)
    console.log(updPoints);
  }

  let votes = updPoints[selected]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      <Votes votes={votes}/>
      <Button onclick={selectQuote} text={'next anecdote'}/>
      <Button onclick={handleVote} text={'vote'}/>
      <MostRated points={points} anecdotes={anecdotes}/>
    </div>
  )
}

export default App;
