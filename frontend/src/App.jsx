import { useState } from 'react'
import LoginSignUp from './Components/LoginSignUp/LoginSignUp'



// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginSignUp /> 
    </div>
  )
}

export default App
