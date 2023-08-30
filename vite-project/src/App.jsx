import React, {useState} from 'react'
import './App.css'
import Logo from './assets/visual-studio-code-1-1.svg'
import { List } from './components/List'






export const App = ({ value }) => {
    const [contador, setContador] = useState(value)

    const handleClick = () => {
       setContador(contador + 1)
        
    }

  return (
    <>
    <h1>Contador</h1>
    <h2>{contador}</h2>
    <button onClick={handleClick}>
        ...Click...
    </button>

<List />
    

    </>
  )
}

