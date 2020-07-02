

import {
    CREATE_TODO_REQUEST,
    DELETE_TODO_REQUEST,
    UPDATE_TODO_REQUEST,
    Todo,
    TodoActionsTypes
} from "./types";

export function createTodo(todo: Todo) : TodoActionsTypes {
    return {
        type: CREATE_TODO_REQUEST,
        payload: { todo },
    };
}

export function deleteTodo(todo: Todo) : TodoActionsTypes {
    return {
        type: DELETE_TODO_REQUEST,
        payload: { todo }
    };
}


export function updateTodo(todo: Todo) : TodoActionsTypes  {
    return {
        type: UPDATE_TODO_REQUEST,
        payload: { todo }
    };
}


