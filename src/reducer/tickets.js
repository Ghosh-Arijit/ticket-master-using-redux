const ticketsInitialState= []

const ticketsReducer= (state = ticketsInitialState, action) => {
    switch(action.type){
        case 'ADD_TICKET':
            return [...state,action.payload]
        case 'REMOVE_TICKET':
            return state.filter(tickets =>tickets.id != action.payload)
        default: 
            return [...state]
    }
}

export default ticketsReducer