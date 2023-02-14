import React from "react";
import './TodoCounterStyle.css';
import "@fontsource/noto-sans"

function TodoCounter() {
    return (
        <React.Fragment>            
            <h2 className="TodoCounter">Has completado 1 de 3 tareas el día de hoy.</h2>
        </React.Fragment>
    );
}

export { TodoCounter };