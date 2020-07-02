
import {CREATE_TODO_REQUEST, TodoActionsTypes, TodoState} from "./types";

const initialState: TodoState = {
    data: []
}

export default function todoReducer(
    state = initialState,
    action: TodoActionsTypes
) : TodoState {

    switch (action.type) {
        case CREATE_TODO_REQUEST: {
            return {
                data: [...state.data, action.payload.todo]
            };
        }

        case "@todo/UPDATE_TODO_REQUEST":
            return {data:  state.data.map(todo => todo.id === action.payload.todo.id ? action.payload.todo : todo ) };

        case "@todo/DELETE_TODO_REQUEST":
            return {data: state.data.filter(todo => todo.id !== action.payload.todo.id)}

        default:
            return state;
    }
}