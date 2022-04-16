import './TodoListItem.css'

export default function TodoListItem({key, content}) {
    return (
        <li className="todo-item">{content}</li>
    );
}