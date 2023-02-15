import React from "react";
import './TodoCounterStyle.css';
import "@fontsource/noto-sans"

function TodoCounter({total, completedTodos}) {
    return (
        <React.Fragment>            
            <h2 className="TodoCounter">Has completado {completedTodos} de {total} tareas el día de hoy.</h2>
        </React.Fragment>
    );
}

export { TodoCounter };