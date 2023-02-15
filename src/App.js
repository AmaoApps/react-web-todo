import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounterComponent/TodoCounterComponent';
import { TodoSearch } from './components/TodoSearchComponent/TodoSearchComponent';
import { TodoList } from './components/TodoListComponent';
import { TodoItem } from './components/TodoItemComponent/TodoItemComponent';
import { CreateTodoButtom } from './components/CreatedButtonComponent';
import { ThemeAppSwitcher } from './components/ThemeAppSwitcherComponent/ThemeAppSwitcherComponent';
import { Button, Container, createTheme, Grid, ThemeProvider, Stack } from '@mui/material';
import Image from 'mui-image';
import financyImage from "./assets/imgs/financy_web.png";
import backgroundImageApp from "./assets/imgs/background_app.jpg"
import { WelcomeUser } from './components/WelcomeUserComponent/WelcomeUserComponent';

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

const styleBackground = {
  backgroundCommonBackground: {
    backgroundImage: `url(${backgroundImageApp})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [payments, setPayments] = useState(todos);

  const completedTodo = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  var searchedValues = [];

  if(searchValue.length>=1){
    searchedValues = todos.filter(todo => {
      const bodyText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return bodyText.includes(searchText)
    })
  } else {
    searchedValues = payments
  }

  const completeTodo = (keyToComplete) => {
    var todoIndexToComplete = todos.findIndex(todo => todo.key == keyToComplete);

    const newTodos = [...todos];
    newTodos[todoIndexToComplete].completed = true;
    setPayments(newTodos);
  }

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
      <React.Fragment>
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light) }>
          <Grid container >
              <Grid item md={6} lg={6} xl={6} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}}>
                <Container maxWidth='md' style={styleBackground.backgroundCommonBackground} >
                  <Stack>
                    <WelcomeUser/>
                    <Image src={financyImage} height="100vh" fit='contain'/>
                  </Stack>
                </Container>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Container maxWidth='lg'>
                  <Stack>
                    <TodoCounter
                      total={totalTodos}
                      completedTodos={completedTodo}
                    />
                    <TodoSearch
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                    <TodoList>
                      {searchedValues.map(todo => (
                        <TodoItem text={todo.text} key={todo.key}/>
                      ))}
                    </TodoList>
                  </Stack>
                </Container>
              </Grid>
          </Grid>

          <CreateTodoButtom/>
          <Button>+</Button>
          <Button onClick={() => changeTheme()}>Change Theme</Button>

          <ThemeAppSwitcher/>
        </ThemeProvider>
      </React.Fragment> 
  );
}

export default App;
