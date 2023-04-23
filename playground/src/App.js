import { useState } from 'react'

const History = ({allClicks, display}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div className='log' style={{display: display}}>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button className='counters' onClick={handleClick}>
    {text}
  </button>
)

const HideHistory = ({handleClick, text}) => (
  <button className='history' onClick={handleClick}>{text}</button>
)

const Reset = ({handleClick}) => (
  <button className='button reset' onClick={handleClick}>reset</button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [display, toggleVisibility] = useState(`'block'`)
  const [text, toggleText] = useState('hide history')

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleHideHistory = () => {
    if (display === 'none') {
      toggleVisibility('block')
      toggleText('hide history')
      console.log('showed');
    
    } else {
      toggleVisibility('none')
    toggleText('show history')
    console.log('hidden');
    }
  }

  const handleReset = () => {
    setAll([])
    setLeft(0)
    setRight(0)
  }
 
  // setTimeout(
  //   () => {
  //   let i = Math.random();
  //   i >= .5 ? handleRightClick() : handleLeftClick()
  // }, 500)

  return (
    <>
      <div className='top'>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      {right}
      <Button handleClick={handleRightClick} text='right' />
      </div>
      <div className='bottom'>
      <>total: {allClicks.length}</><br/>
      <HideHistory text={text} handleClick={handleHideHistory} />
      <History display={display} allClicks={allClicks} /><br/>
      <Reset handleClick={handleReset}/>
      </div>
    </>
  )
}

export default App