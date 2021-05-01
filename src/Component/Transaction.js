import React, { useContext } from 'react';

// Import TransactionContext 
import { TransactionContext } from "../Context/GlobalState";

// import Transaction History 
import { TransactionHistory } from "./TransactionHistory";

export const Transaction = ({ transObj }) => {

    const { DeleteTransaction } = useContext(TransactionContext);

    const sign = transObj.amount > 0 ? '+' : '-';
    const transactionType = transObj.amount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transObj.desc}
            <span>{sign}${Math.abs(transObj.amount)}</span>
            <button className="delete-btn"
                onClick={() => DeleteTransaction(transObj.id)}>
                X
            </button>
        </li>
    )
}