import React, { useContext } from 'react';

// Import TransactionContext 
import { TransactionContext } from "../Context/GlobalState";

export const Balance = () => {
    
    let { getExpanse,getIncome,transactions,Balance } = useContext(TransactionContext);
    const sign = transactions.amount > 0 ? '+' : '-';
    return (
        <div>
             <h4>Current Balance</h4>
             <h1 id="balance">{sign}${Math.abs(Balance(getIncome(transactions),getExpanse(transactions)))}</h1>
        </div>
    )
}
