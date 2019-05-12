import axios from 'axios'
import { key } from '../config/api_keys'

export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        payload: ticket
    }
}

export const setTicket = (ticket) => {
    return {
        type: 'SET_TICKET',
        payload: ticket
    }
}

// removeTicket 
export const removeTicket = (ticket_code) => {
    return {
        type: 'REMOVE_TICKET',
        payload: ticket_code 
    }
}

// export const removeTicket = (ticket) => {
//     return {
//         type: 'REMOVE_TICKET',
//         payload: ticket
//     }
// }

export const startAddTicket = (ticket) => {
    return (dispatch) => {
        axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=${key}`, ticket)
            .then(response => {
                const ticket = response.data
                dispatch(addTicket(ticket))
            })
    }
}

export const startSetTickets = () => {
    return (dispatch) => {
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=${key}`)
            .then(response => {
                dispatch(setTicket(response.data))
            })
    }
}

export const startRemoveTicket= (ticket) => {
    return (dispatch) => {
        axios.delete(`http://dct-api-data.herokuapp.com/tickets/${ticket.ticket_code}?api_key=${key}`)
            .then(() => {
                dispatch(removeTicket(ticket.ticket_code))
            })
    }
}

