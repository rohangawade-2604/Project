import React, { useState } from 'react'
import './todo.css'


const Todoapp = (props) => {
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

                <button className='add-btn' 
                onClick={() => {
                    props.addList(Text)
                }}>+</button>
                <div>{Text}</div>
                
            </div>
        </>
    )
}

export default Todoapp;
