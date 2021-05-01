import React, { useContext } from 'react';

// Import TransactionContext 
import { TransactionContext } from "../Context/GlobalState";


export const AccountSummary = () => {

    let { getExpanse,getIncome,transactions} = useContext(TransactionContext);
    const sign = transactions.amount > 0 ? '+' : '-';

    return (
             
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">
                       {sign}${Math.abs(getIncome(transactions))}
                    </p>
                </div>

                <div>
                    <h4>Exapnse</h4>
                    <p className="money minus">
                        {sign}${Math.abs(getExpanse(transactions))}
                    </p>
                </div>
            </div>

    );
}
