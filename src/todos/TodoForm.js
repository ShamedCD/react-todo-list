import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getTodos } from './selectors';
import { addTodo } from './thunks';

import './TodoForm.css';

const TodoForm = ({ todos, onCreatePressed }) => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <div className="todo-form">
            <input className="input-todo" type="text" placeholder="Type your new todo here!" value={ inputValue } onChange={ (e) => setInputValue(e.target.value) } />
            <button
                onClick={() => {
                    const isDuplicateText = todos.some((todo) => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="button-todo">
                    Create Todo
            </button>
        </div>
    ); 
};

const mapStateToProps = (state) => ({
    todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: (text) => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);