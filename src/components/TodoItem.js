import React from 'react';
import { Checkbox } from '@material-ui/core';
import './TodoItem.css';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({name, done, id}) => {

    const dispatch = useDispatch()

    const handleCheck = () =>{
        dispatch(setCheck(id))
    }

    return (
        <div className='todoItem'>
            <Checkbox
            checked={done}
            onChange={handleCheck}
            name="checkedB"
            color="primary"
          />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    );
}

export default TodoItem