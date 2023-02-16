import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const PaymentContext = React.createContext();

function PaymentProvider(props) {
    const {
        item: payments, 
        savePayments,
        loading, 
        error
    } = useLocalStorage();
    
    const [searchValue, setSearchValue] = useState('');


    const completedTodo = payments.filter(todo => todo.completed === true).length;
    const totalTodos = payments.length;

    var searchedValues = [];

    if(searchValue.length>=1){
        searchedValues = payments.filter(todo => {
            const bodyText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return bodyText.includes(searchText)
        })
    } else {
        searchedValues = payments
    }

    const deletePayment = (idToDelete) => {
        console.log("Deleteing in " + idToDelete)
        console.log(idToDelete)
        var todoIndexToDelete = payments.findIndex(todo => todo.id == idToDelete);

        const newPayments = [...payments];
        newPayments.splice(todoIndexToDelete, 1);
        savePayments(newPayments);
    }

    return (
        <PaymentContext.Provider value={{
            loading, 
            error, 
            totalTodos, 
            completedTodo,
            searchValue, 
            setSearchValue, 
            searchedValues, 
            completedTodo, 
            deletePayment
        }}>
            {props.children}
        </PaymentContext.Provider>
    );
} 

export { PaymentContext, PaymentProvider };