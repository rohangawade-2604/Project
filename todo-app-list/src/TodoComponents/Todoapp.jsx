import React, { useState } from 'react'
import './todo.css'


const Todoapp = () => {
    const[Text , setText] = useState('')

    return (
        <>
            <div className="main-box">
                <input type="text" 
                className='input-box'
                placeholder='Enter Something'
                onChange={e =>{
                    setText(e.target.value)
                }}/>

                <button className='add-btn'>+</button>
                <div>{Text}</div>
                
            </div>
        </>
    )
}

export default Todoapp;
