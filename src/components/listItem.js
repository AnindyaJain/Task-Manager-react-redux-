import React, {useState} from 'react';
import  {useDispatch} from 'react-redux';
import { delTask, editTask } from "../actions";

export default function ListItem ({task}) {
    let dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(task.name);   
    return (
        <div className="list-item">
            <input type="checkbox" className="checkbox" />
            <div className="text-field">
                {editable ? (
                <input
                    type="text"
                    className="edit-input"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                ) : (
                <span className="edit-input" style={{textAlign: "center"}}>{task.name}</span>
                )}
            </div>
            <button
                onClick={() => {
                dispatch(editTask(task, task.id, name));
                if (editable) {
                    setName(task.name);
                }
                setEditable(!editable);
                }}
            >
                {editable ? "Save" : <i className="fa fa-pencil" aria-hidden="true"></i>}
            </button>
            <button onClick={() => dispatch(delTask(task.id))}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div>
    );
}