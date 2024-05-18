import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("grey")

  return (
      <div className='body-container' style={{backgroundColor: color}}>
        <div className='button-container'>
          <div className="button">
            <button className='btn'
            onClick={() => setColor("Red")} 
            style={{backgroundColor: 'red'}}>Red</button>
            <button className='btn'
            onClick={() => setColor('Yellow')} 
            style={{backgroundColor: 'Yellow'}}>Yellow</button>
             <button className='btn'
            onClick={() => setColor('Green')} 
            style={{backgroundColor: 'Green'}}>Green</button>
             <button className='btn'
            onClick={() => setColor('Blue')} 
            style={{backgroundColor: 'Blue'}}>Blue</button>
             <button className='btn'
            onClick={() => setColor('Black')} 
            style={{backgroundColor: 'Black'}}>Black</button>
            <button className='btn' 
            style={{backgroundColor: 'grey'}}
            onClick={() => setColor('Grey')}>Grey</button>
          </div>
        </div>
      </div>
  )
}

export default App
