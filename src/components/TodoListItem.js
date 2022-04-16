import './TodoListItem.css'

export default function TodoListItem({content}) {
    return (
        <li className="todo-item">{content}</li>
    );
}