import React, { useState, useContext } from 'react';

// Import TransactionContext 
import { TransactionContext } from "../Context/GlobalState";

export const AddNewTransaction = () => {

    let { addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();

        if (Number(newAmount) === 0) {
            alert("Please enter a correct value !");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>

            <form onSubmit={handleAddition}>
                <div className="from-control">
                    <label htmlFor="discription">
                        Discription
                        </label>

                    <input type="text"
                        placeholder="Details of Transaction"
                        required
                        id="discription"
                        onChange={(event) => {
                            setDesc(event.target.value);
                        }}
                        value={newDesc}
                    />
                </div>
                <div className="from-control">
                    <label htmlFor="transactionAmount" >
                        Amount
                        </label>
                    <input type="number"
                        placeholder="Enter Transaction Amount"
                        required
                        id="transactionAmount"
                        onChange={(event) => {
                            setAmount(event.target.value)
                        }}
                        value={newAmount}

                    />
                </div>

                <button type="submit" className="btn">Add Transaction</button>
            </form>
        </div>

    )
}
