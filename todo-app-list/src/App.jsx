import { useState } from 'react'
import './App.css'
import Todoapp from './TodoComponents/Todoapp'



function App() {
const [listTodo , setListTodo] = useState([]);
useState([])
useState([])
useState('')
let addlist = (Text) =>{
  setListTodo([...listTodo,Text])
}

  return (
    <>
      <Todoapp/>
    </>
  )
}

export default App
