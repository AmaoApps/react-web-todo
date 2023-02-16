import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounterComponent/TodoCounterComponent';
import { TodoSearch } from './components/TodoSearchComponent/TodoSearchComponent';
import { TodoList } from './components/PaymentListComponent/TodoListComponent';
import { TodoItem } from './components/TodoItemComponent/TodoItemComponent';
import { CreateTodoButtom } from './components/CreatedButtonComponent';
import { ThemeAppSwitcher } from './components/ThemeAppSwitcherComponent/ThemeAppSwitcherComponent';
import { Button, Container, createTheme, Grid, ThemeProvider, Stack } from '@mui/material';
import Image from 'mui-image';
import financyImage from "./assets/imgs/financy_web.png";
import backgroundImageApp from "./assets/imgs/background_app.jpg"
import { WelcomeUser } from './components/WelcomeUserComponent/WelcomeUserComponent';
import { PaymentContext, PaymentProvider } from './paymentContext';

/*
const todos = [
  { id: 1, text: 'Estudiar React', completed: true},
  { id: 2, text: 'Responsive on React', completed: false},
  { id: 3, text: 'Estilos en React', completed: false}
]*/


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

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const { 
    error, 
    loading, 
    searchedValues, 
    deletePayment
  } = React.useContext(PaymentContext)


  return (
      <React.Fragment>
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light) }>
          <PaymentProvider>

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
                      <TodoCounter/>
                      <TodoSearch/>
                      <PaymentContext.Consumer>

                        {({ 
                          error, 
                          loading, 
                          searchedValues, 
                          deletePayment
                        }) => (
                          <TodoList>
                            {error && <p>Ocurrió un error...</p>}
                            {loading && <p>Cargando...</p>}
                            {(!loading && !searchedValues.length) && <p>Agrega tu primer pago/gasto</p>}
                            {searchedValues.map(todo => (
                              <TodoItem key={todo.id}
                                text={todo.text} 
                                id={todo.id}
                                onDelete={() => deletePayment(todo.id)}
                              />
                            ))}
                          </TodoList>
                        )}

                      </PaymentContext.Consumer>

                      
                    </Stack>
                  </Container>
                </Grid>
            </Grid>

            <CreateTodoButtom/>
            <Button>+</Button>
            <Button onClick={() => changeTheme()}>Change Theme</Button>

            <ThemeAppSwitcher/>

          </PaymentProvider>
        </ThemeProvider>
      </React.Fragment> 
  );
}

export default App;
