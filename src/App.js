import './App.css';
import TodoListContainer from './components/TodoListContainer';

function App() {
  return (
    <>
      <header>
        <h1 className="todo-heading">My Todo List</h1>
      </header>
      <main>
        <TodoListContainer />
      </main>
    </>
  );
}

export default App;