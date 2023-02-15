import React from "react";
import { Button, Container, createTheme, Grid, ThemeProvider } from '@mui/material';

function WelcomeUser() {
    return (
        <React.Fragment>    
            <h2>Bienvenido Usuario</h2>
            <h3>El día de hoy has registrado 2 Gastos</h3>
        </React.Fragment>
    );
}

export { WelcomeUser };