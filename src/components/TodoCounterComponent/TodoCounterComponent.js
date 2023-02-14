import React from "react";
import './TodoCounterStyle.css';
import { Button } from "@mui/material";

function TodoCounter() {
    return (
        <React.Fragment>            
            <h2 className="TodoCounter">Has completado 1 de 3 tareas el día de hoy.</h2>
            <Button variant="contained"> HEY! Ulises </Button>
        </React.Fragment>
    );
}

export { TodoCounter };