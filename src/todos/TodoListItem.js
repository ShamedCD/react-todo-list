import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
    <div className="todo-item-container">
        <h3>{ todo.text }</h3>
        <div className="buttons-container">
            { todo.isCompleted
                ? null
                : <button
                    onClick={() => {
                        onCompletePressed(todo.id)
                    }}
                    className="button-complete">Completed</button>
            }
            <button
                onClick={() =>{
                    onRemovePressed(todo.id)
                }}
                className="button-remove">Remove</button>
        </div>
    </div>
);

export default TodoListItem;