import './TodoList.css'

import TodoListItem from './TodoListItem';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function TodoListContainer() {

    let [initialTodo, setTodo] = useState([
        { id: uuid(), content: 'Sleep' },
        { id: uuid(), content: 'Coffee' },
        { id: uuid(), content: 'Code' },
        { id: uuid(), content: 'Go Training' },
        { id: uuid(), content: 'Sleep' },
    ]);

    function addItemOnBlurHandler(e) {
        const newTodo = { id: uuid(), content: e.target.value }

        setTodo(state => [
            ...state,
            newTodo
        ]);

        e.target.value = '';
    }

    function deleteListItemHandler(id) {
        setTodo(state => state.filter(todoItem => todoItem.id !== id));
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
                    deleteHandler={() => deleteListItemHandler(todo.id)}
                />)}
        </ul>
    );
}