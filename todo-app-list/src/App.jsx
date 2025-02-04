import { useState } from 'react'
import './App.css'
import Todoapp from './TodoComponents/Todoapp'



function App() {
const [listTodo , setListTodo] = useState([]);

let addList = (Text) =>{
  setListTodo([...listTodo,Text])
}

  return (
    <>
      <Todoapp addList = {addList}/>
    </>
  )
}

export default App
