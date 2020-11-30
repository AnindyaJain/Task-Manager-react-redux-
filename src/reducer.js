const initialVal = {
    list: [],
};
const reducer = (state = initialVal, action) => {
    switch (action.type) {
        case "ADD_TASK":
        return {
            ...state,
            list: [...state.list, action.payload],
        };
    case "DEL_TASK":
        return {
            ...state,
            list: [...state.list.filter((task) => task.id !== action.payload.id)],
        };
    case "EDIT_TASK":
        let list = [...state.list];
        let index = -1;
        for (let i=0; i<list.length; i++) {
            index++;
            if (list[i].id === action.payload.id) {
                break;
            }
        }
        if (index!== -1) { 
            list[index] = action.payload;
            return {
                ...state,
                list
            };
        } 
        break;
    default:
        return state;
    }
};
export default reducer;
