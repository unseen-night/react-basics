import './App.css';
import {useState} from "react";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";

function App() {
    const [todos,setTodos] = useState([])

    function addNewTodo(value) {
        console.log(value);
        const todo = {value,id: getNewId()}
        const newTodoList = [...todos,todo]
        setTodos(newTodoList);
    }

    function getNewId() {

        let max = 0;
        todos.forEach(todo =>  {
            if (todo.id > max)
                max = todo.id;
        });

        return max+1;
    }

    function updateTodo(id, value) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.value = value;
            }
            return todo;
        }));

    }

    function completeTodo(id, isComplete) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.complete = isComplete;
            }
            return todo;
        }));
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

  return (
    <div className="App">
        <h1>What's the plan for today?</h1>
        <TodoForm buttonLabel={"Add Todo"} onSubmit={addNewTodo} placeholder={"Add a todo"}/>
        <TodoList items={todos} onDelete={deleteTodo} onUpdate={updateTodo} onComplete={completeTodo}/>
    </div>
  );
    
}

export default App;
