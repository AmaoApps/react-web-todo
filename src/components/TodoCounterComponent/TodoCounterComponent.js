import React from "react";
import './TodoCounterStyle.css';
import "@fontsource/noto-sans"
import { PaymentContext } from "../../paymentContext";

function TodoCounter() {

    const {
        completedTodos, 
        totalTodos: total
    } = React.useContext(PaymentContext);

    return (
        <React.Fragment>            
            <h2 className="TodoCounter">Has registrado {completedTodos} de {total} tareas el día de hoy.</h2>
        </React.Fragment>
    );
}

export { TodoCounter };