import './TodoListItem.css'

export default function TodoListItem({content, deleteHandler}) {
    return <li className="todo-item">{content} <button onClick={deleteHandler}>x</button></li>;
}