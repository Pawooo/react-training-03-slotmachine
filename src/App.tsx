import { useState } from 'react'
import './App.css'

function App() {
  const [win, setWin] = useState(false);
  const [slots, setSlots] = useState([]);

  function roll() {
    const newSlots = Array.from({ length: 3 }, () => Math.floor(Math.random() * 3) + 1);
    setSlots(newSlots);
    // setSlots(() => newSlots);

    console.log(slots);
    
    // If you check for slots using slots[], state does not update on time and you're always one step behind
    // if(slots[0] === slots[1] && slots[1] === slots[2]) {
    if(newSlots[0] === newSlots[1] && newSlots[1] === newSlots[2]) {
      setWin(true);
    } else {
      setWin(false);
    };
  }

  return (
    <>
      <h1>Slot Machine</h1>
      { slots.map(i => 
        i
      )}
      { win ? <h2>You Won</h2> : <h2>You Lost</h2> }
      <button onClick={roll}>ROLL</button>
    </>
  )
}

export default App
