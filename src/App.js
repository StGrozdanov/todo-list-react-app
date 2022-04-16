import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <header>
        <h1 className="todo-heading">My Todo List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </>
  );
}

export default App;