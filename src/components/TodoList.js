import './TodoList.css'

import TodoListItem from './TodoListItem';

export default function TodoListContainer() {
    return (
            <ul className='todo-container'>
                <h3 className='todo-container-heading'>For today</h3>
                <TodoListItem content="Sleep" />
                <TodoListItem content="Wake" />
                <TodoListItem content="Code" />
                <TodoListItem content="Train" />
                <TodoListItem content="Sleep" />
            </ul>
    );
}