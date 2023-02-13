import logo from './logo.svg';
import React from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounterComponent/TodoCounterComponent';
import { TodoSearch } from './components/TodoSearchComponent';
import { TodoList } from './components/TodoListComponent';
import { TodoItem } from './components/TodoItemComponent';
import { CreateTodoButtom } from './components/CreatedButtonComponent';


const todos = [
  { key: 1, text: 'Estudiar React', completed: true},
  { key: 2, text: 'Responsive on React', completed: false},
  { key: 3, text: 'Estilos en React', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem text={todo.text} key={todo.key}/>
        ))}
      </TodoList>

      <CreateTodoButtom/>
      <button>+</button>


    </React.Fragment> 
  );
}

export default App;
