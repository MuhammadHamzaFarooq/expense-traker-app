import React, { useContext } from 'react';

// Import TransactionContext 
import { TransactionContext } from "../Context/GlobalState";


export const AccountSummary = () => {

    let { getExpanse,getIncome,transactions} = useContext(TransactionContext);


    return (
             
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">
                       +${Math.abs(getIncome(transactions))}
                    </p>
                </div>

                <div>
                    <h4>Expense</h4>
                    <p className="money minus">
                        -${Math.abs(getExpanse(transactions))}
                    </p>
                </div>
            </div>

    );
}
