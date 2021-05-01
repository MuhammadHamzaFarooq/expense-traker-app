const transactioReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':{
            return state.filter((transactions) => transactions.id !==action.payload)
        }
        case "ADD_TRANSATION": {
            return [action.payload, ...state]
        }
        default:
            return state

    }

}

export default transactioReducer;