import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import {
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos
} from './selectors';
import {
    loadTodos,
    deleteTodo,
    tCompleteTodo
} from './thunks';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto; 
`;

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMsg = <div>Loading todos... </div>;
    const content = (
        <ListWrapper>
            <TodoForm />
            <h3>Incomplete:</h3>
            { incompleteTodos.map((todo) => <TodoListItem todo={ todo } onRemovePressed={ onRemovePressed } onCompletePressed={ onCompletePressed } />) }
            <h3>Completed:</h3>
            { completedTodos.map((todo) => <TodoListItem todo={ todo } onRemovePressed={ onRemovePressed } onCompletePressed={ onCompletePressed } />) }
        </ListWrapper>
    );

    return isLoading ? loadingMsg :  content;
};

const mapStateToProps = (state) => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: (id) => dispatch(deleteTodo(id)),
    onCompletePressed: (id) => dispatch(tCompleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);