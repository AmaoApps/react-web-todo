import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounterComponent/TodoCounterComponent';
import { TodoSearch } from './components/TodoSearchComponent';
import { TodoList } from './components/TodoListComponent';
import { TodoItem } from './components/TodoItemComponent';
import { CreateTodoButtom } from './components/CreatedButtonComponent';
import { ThemeAppSwitcher } from './components/ThemeAppSwitcherComponent/ThemeAppSwitcherComponent';
import { Button, createTheme, ThemeProvider } from '@mui/material';

const todos = [
  { key: 1, text: 'Estudiar React', completed: true},
  { key: 2, text: 'Responsive on React', completed: false},
  { key: 3, text: 'Estilos en React', completed: false}
]


const light = {
  palette: {
    mode: "light",
    primary: {
      main: "#000e35",
    },
  }
}

const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: "#f50057",
    },
  }
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
      <React.Fragment>
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light) }>
          <TodoCounter/>

          <TodoSearch/>

          <TodoList>
            {todos.map(todo => (
              <TodoItem text={todo.text} key={todo.key}/>
            ))}
          </TodoList>

          <CreateTodoButtom/>
          <Button>+</Button>
          <Button onClick={() => changeTheme()}>Change Theme</Button>

          <ThemeAppSwitcher/>
        </ThemeProvider>
      </React.Fragment> 
  );
}

export default App;
