import { useState } from 'react'
import Actividad from './componentes/Actividad'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Actividad/>
    </div>
  )
}

export default App
