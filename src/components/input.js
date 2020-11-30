import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import './style.css';
import { addTask } from '../actions';


const InputField = () => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');

    const onValChange = (event) => {
        setNewTask(event.target.value);
    }
    const onAdd = () => {
        if (newTask !== "") {
            dispatch(addTask(newTask));
            setNewTask("");
        } else {
            window.alert("Cannot add empty field");
        }
        
    }
    
    return (
        <div className="add-container">
            <input type="text" className = "input-field" value={newTask} onChange={onValChange} placeholder="Enter new task" />
            <button className="btn" onClick={()=> onAdd()}>ADD</button>
        </div>
    )
}

export default InputField;