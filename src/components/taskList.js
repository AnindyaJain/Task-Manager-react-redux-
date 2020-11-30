import React from 'react';
import ListItem from '../components/listItem';
import {useSelector} from 'react-redux';
import "./style.css";

export default function TaskList  () {
    let list = useSelector(state => state.list);
    if(list.length === 0) {
        return <p style={{ color: "rgb(46, 26, 26)" }}>Add your first task!</p>;
    } else {
        return (
            <div className="task-list">
                {list.map(task=>{
                    return <ListItem key={task.id} task={task}/>
                })}
            </div>
        )
    }
}