import React, { useContext } from 'react';

// Import TransactionContext 
import { TransactionContext } from "../Context/GlobalState";

export const Balance = () => {
    
    let { getExpanse,getIncome,transactions,Balance } = useContext(TransactionContext);
    let balance = Balance(getIncome(transactions),getExpanse(transactions));
    let sign = balance> 0 ?'+':'-'; 
    return (
        <div>
             <h4>Current Balance</h4>
             <h1 id="balance">{sign}${(Math.abs(balance)) }</h1>
        </div>
    )
}
