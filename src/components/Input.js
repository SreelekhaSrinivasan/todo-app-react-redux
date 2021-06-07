import React from 'react';
import './Input.css';
import { useState } from 'react'

import {useDispatch} from 'react-redux';
import { saveTodo } from '../features/todoSlice';


const Input = () => {

    const[inputVal, setInputVal] = useState('');
     const dispatch = useDispatch();

    const  addTodo= () =>{
        console.log(`Adding ${inputVal}`)
        dispatch(saveTodo({
            item: inputVal,
            done:false,
            id: Date.now()
        }))
    }

    return (
        <div className='input'>
            <input type='text' onChange={e=> setInputVal(e.target.value)} />
            <button onClick={addTodo}>Add Task</button>
        </div>
    )
}

export default Input
