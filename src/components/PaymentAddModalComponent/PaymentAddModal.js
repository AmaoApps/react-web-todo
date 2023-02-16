import React from "react";
import ReactDOM from "react-dom"

function PaymentAddModal({children}) {
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
    );
}

export { PaymentAddModal };