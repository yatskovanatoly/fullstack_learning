import './App.css';
import { useState } from 'react';

const Button = ({onclick, text}) => {
  return <button onClick={onclick}>{text}</button>
}

const StatisticLine = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
  
  const all = good + bad + neutral
  const average = (good - bad) / (all);
  const positive = good / (all) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No fucks given</p>
  }
  return (
    <table>
      <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="positive" value={positive + '%'} />
          <StatisticLine text="average" value={average} />
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  const handleReset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }
  
 return (
  <>
  <h1>give feedback</h1>
  <Button text='good' onclick={handleGood}/>
  <Button text='neutral' onclick={handleNeutral}/>
  <Button text='bad' onclick={handleBad}/>
  <br/>
  <br/>
  <Button text='reset' onclick={handleReset}/>
  <h2>statistics</h2>
  <Stats good={good} neutral={neutral} bad={bad}/>
  </>

 )
}

export default App;
