import React from "react";
import { LOCALSTORAGE_PAYMENTS } from "../utils/constants";

function useLocalStorage() {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState([]);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(LOCALSTORAGE_PAYMENTS);
          let parsedItem;
    
          if(!localStorageItem) {
            localStorage.setItem(LOCALSTORAGE_PAYMENTS, JSON.stringify([]));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
          
        } catch (error) {
          setError(error);
        }
      }, 2000);
  
    })
  
    const saveItems = (newPayments) => {
      try {
        let stringlifiedPayments = JSON.stringify(newPayments);
        localStorage.setItem(LOCALSTORAGE_PAYMENTS, stringlifiedPayments)
        setItem(newPayments);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItems,
      loading, 
      error
    }
  
  } 

export { useLocalStorage };