import React, {useState} from 'react'
import './List.css'


const Items = ({name, check}) => {
  return(
    <li>{name } {check ? '✅' : '✖️'}</li>
  )
}



export const List = () => {



  const addTask = () => {
  setSolve([...solve, { name: 'New', check: false}])
}
  let listadosecciones = [
    {name: 'comands NPM Run', check: true},
    {name: "how works vite", check: true},
    {name: "components", check: true},
    {name: "variables in JSx", check: true},
    {name: "Props", check: true},
    {name: "Eventos", check: true},
    {name: "useState", check: true},
    {name: "redux", check: false},
    {name: "costum hooks", check: false}
  ]
  const [solve, setSolve] = useState(listadosecciones)

  return (
    <>
    <div className='container'>
        <h5>Listado de  los Temas de que estoi aprendiendo:</h5>
            <ol>
                  {solve.map(Item => <Items key={Item.name}  name={Item.name} check={Item.check}></Items>)}
                 
            </ol>
            <button onClick={() => addTask()}>Add Task</button>


    </div>
  


    </>
  )
}

