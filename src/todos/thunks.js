import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo, removeTodo, completeTodo  } from './actions';

const todosApi = 'http://localhost:8080';

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
    
        const response = await fetch(`${todosApi}/todos-delay`);
        const todos = await response.json();
    
        dispatch(loadTodosSuccess(todos));
    } catch (error) {
        dispatch(loadTodosFailure());
    }
}

export const addTodo = (text) => async (dispatch) => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch(`${todosApi}/todos`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body,
        });
    
        const todo = await response.json();
    
        dispatch(createTodo(todo));
    } catch (error) {
        console.log(error);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${todosApi}/todos/${id}`, {
            method: 'delete',
        });
    
        const todo = await response.json();
    
        dispatch(removeTodo(todo));
    } catch (error) {
        console.log(error);
    }
};

export const tCompleteTodo = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${todosApi}/todos/${id}/completed`, {
            method: 'post',
            body: {}
        });
    
        const todo = await response.json();
    
        dispatch(completeTodo(todo));
    } catch (error) {
        console.log(error);
    }
};