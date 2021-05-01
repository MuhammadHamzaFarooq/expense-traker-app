import React from 'react';
import './App.css';

// Import GlobalProvider
import { GlobalProvider } from "./Context/GlobalState";

// import Components 
import { Header } from "./Component/Header";
import { Balance  } from "./Component/Balance";
import { AccountSummary } from "./Component/AccountSummary";
import { TransactionHistory } from "./Component/TransactionHistory";
import { AddNewTransaction } from "./Component/AddNewTransaction";


function App() {
    return (
        < GlobalProvider>
            <div className="container">
                <Header />
                <Balance/>
                <AccountSummary />
     
                <TransactionHistory />
                <AddNewTransaction />
            </div>
        </GlobalProvider>
    );

}

export default App;