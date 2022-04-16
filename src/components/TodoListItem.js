import './TodoListItem.css'

export default function TodoListItem({ content, checked, deleteHandler, checkHandler }) {
    return (
        <li onClick={checkHandler} className={checked ? 'checked-todo-list-item' : ''}>
            {content}
            <button className='todo-list-item-button' onClick={deleteHandler}>x</button>
        </li>
    );
}