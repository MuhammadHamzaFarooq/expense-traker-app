import React, { Children, createContext, useReducer } from "react";

// Import AppReducer
import transactioReducer from "./AppReducer";

// InintalTransaction for history
let inintalTransaction = [
    { id: 1, amount: 5000, desc: "Cash" },
    { id: 2, amount: -50, desc: "Book" },
    { id: 3, amount: -200, desc: "Chicken Barayni" },
    { id: 4, amount: -1200, desc: "Pizza" },
];

// createcontext 
export const TransactionContext = createContext(inintalTransaction);


// create Global Provider 
export const GlobalProvider = ({ children }) => {
    let [state, dispatch] = useReducer(transactioReducer, inintalTransaction);

    //Add Transaction Function
    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSATION",
            payload: {
                desc: transObj.desc,
                amount: transObj.amount,
            }
        });
    }


    // Delete Existing Transaction Action
    function DeleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }


    //Income function
    const getIncome = (transObj) => {
        let income = 0;
        for (let i = 0; i < transObj.length; i++) {
            if (transObj[i].amount > 0)
                income = income + transObj[i].amount;
        }
        return income;
    }

    //Expanse Function
    const getExpanse = (transObj) => {
        let expanse = 0;
        for (let i = 0; i < transObj.length; i++) {
            if (transObj[i].amount < 0)
                expanse += transObj[i].amount;
        }
        return expanse;
    }

    //Balance Funciton 

    const Balance = (getIncome, getExpanse) => {
        let balance = getExpanse + getIncome;
        return balance;
    }


    return (
        <TransactionContext.Provider
            value={
                {
                    transactions: state,
                    addTransaction,
                    DeleteTransaction,
                    getExpanse,
                    getIncome,
                    Balance,
                }

            }
        >

            { children}
        </TransactionContext.Provider>
    );
}



