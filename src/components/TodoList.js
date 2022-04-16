import './TodoList.css'

import TodoListItem from './TodoListItem';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function TodoListContainer() {
    let [initialTodo, setTodo] = useState([
        { id: uuid(), content: 'Sleep', checkedAsDone: false },
        { id: uuid(), content: 'Coffee', checkedAsDone: false },
        { id: uuid(), content: 'Code', checkedAsDone: false },
        { id: uuid(), content: 'Go Training', checkedAsDone: false },
        { id: uuid(), content: 'Sleep', checkedAsDone: false },
    ]);

    function addItemOnBlurHandler(e) {
        const newTodo = { id: uuid(), content: e.target.value, checkedAsDone: false }

        setTodo(state => [
            ...state,
            newTodo
        ]);

        e.target.value = '';
    }

    function deleteListItemOnClickHandler(e, targetItemId) {
        e.stopPropagation();

        setTodo(state => state.filter(todoItem => todoItem.id !== targetItemId));
    }

    function checkListItemAsDoneOnClickHandler(targetItemId) {
        setTodo(state => state.map(todoItem => {
            return todoItem.id === targetItemId
                ? { ...todoItem, checkedAsDone: !todoItem.checkedAsDone }
                : todoItem
        }));
    }

    return (
        <ul className='todo-container'>
            <h3 className='todo-container-heading'>For today</h3>
            <label htmlFor="add-todo">Add task</label>
            <input onBlur={addItemOnBlurHandler} className="add-todo-input" type="text" name='add-todo' />
            {initialTodo.map(todo =>
                <TodoListItem
                    key={todo.id}
                    content={todo.content}
                    checked={todo.checkedAsDone}
                    deleteHandler={(e) => deleteListItemOnClickHandler(e, todo.id)}
                    checkHandler={() => checkListItemAsDoneOnClickHandler(todo.id)}
                />)}
        </ul>
    );
}