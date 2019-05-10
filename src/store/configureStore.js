import { createStore, combineReducers } from 'redux'
import ticketsReducer from '../reducer/tickets'

const ConfigureStore= ()=>{
    const store= createStore(combineReducers({
        tickets: ticketsReducer
    }))
    
    return store
}

export default ConfigureStore