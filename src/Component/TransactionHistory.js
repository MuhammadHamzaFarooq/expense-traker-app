import React, { useContext } from 'react';

// Import TransactionContext 
import { TransactionContext } from "../Context/GlobalState";

//Import Transaction 
import { Transaction } from "./Transaction";

export const TransactionHistory = () => {

    const { transactions } = useContext(TransactionContext);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                
                {transactions.map((transObj) =>
                (
                    <Transaction key={transObj.id} transObj={transObj} />
                )
                )}
            </ul>
        </div>
    )

}