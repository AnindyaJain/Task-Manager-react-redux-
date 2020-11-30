import uuid from "react-uuid";
export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: {
            id: uuid(),
            name: task,
        },
    };
};

export const delTask = (id) => {
    return {
        type: "DEL_TASK",
        payload: {
            id,
        },
    };
};

export const editTask = (task, id, name) => {
    return {
        type: "EDIT_TASK",
        payload: {
            ...task,
            id,
            name,
        },
    };
}
