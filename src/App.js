import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounterComponent/TodoCounterComponent';
import { TodoSearch } from './components/TodoSearchComponent/TodoSearchComponent';
import { TodoList } from './components/PaymentListComponent/TodoListComponent';
import { TodoItem } from './components/TodoItemComponent/TodoItemComponent';
import { CreateTodoButtom } from './components/CreatedButtonComponent';
import { ThemeAppSwitcher } from './components/ThemeAppSwitcherComponent/ThemeAppSwitcherComponent';
import { Button, Container, createTheme, Grid, ThemeProvider, Stack, Modal, Box, Typography } from '@mui/material';
import Image from 'mui-image';
import financyImage from "./assets/imgs/financy_web.png";
import backgroundImageApp from "./assets/imgs/background_app.jpg"
import { WelcomeUser } from './components/WelcomeUserComponent/WelcomeUserComponent';
import { PaymentContext, PaymentProvider } from './paymentContext';
import { PaymentAddModal } from './components/PaymentAddModalComponent/PaymentAddModal';

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

  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { 
    error, 
    loading, 
    searchedValues, 
    deletePayment
  } = React.useContext(PaymentContext);

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
                      <TodoCounter/>
                      <TodoSearch/>
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

                    </Stack>
                  </Container>
                </Grid>
            </Grid>

            <PaymentAddModal>
              <Button onClick={handleOpen}>Open modal</Button>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                  <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                  </Box>
                </Modal>
            </PaymentAddModal>
              
            <CreateTodoButtom/>
            <Button>+</Button>
            <Button onClick={() => changeTheme()}>Change Theme</Button>

            <ThemeAppSwitcher/>

        </ThemeProvider>
      </React.Fragment> 
  );
}

export default App;
