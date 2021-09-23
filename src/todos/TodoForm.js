import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTodos } from './selectors';
import { addTodo } from './thunks';

const TodoFormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const TodoFormInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const TodoFormButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const TodoForm = ({ todos, onCreatePressed }) => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <TodoFormContainer>
            <TodoFormInput type="text" placeholder="Type your new todo here!" value={ inputValue } onChange={ (e) => setInputValue(e.target.value) } />
            <TodoFormButton
                onClick={() => {
                    const isDuplicateText = todos.some((todo) => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >
                    Create Todo
            </TodoFormButton>
        </TodoFormContainer>
    ); 
};

const mapStateToProps = (state) => ({
    todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: (text) => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);