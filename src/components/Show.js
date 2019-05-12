import React from 'react' 
import { connect } from 'react-redux'

import { removeTicket } from '../actions/tickets'

const TicketShow = (props) => {
    const { ticket_code, name, message, priority, department } = props.ticket 

    const handleRemove = () => {
        const confirm = window.confirm("Are you sure? ") 
        if(confirm) {
           props.dispatch(removeTicket(ticket_code))
           props.history.push('/tickets')
        }
    }

    return (
        <div>
            <h2> { ticket_code } </h2> 
            <p> { name }  { message } { priority } { department } </p> 


            <button className="btn btn-danger" onClick={handleRemove}>
                remove 
            </button>
        </div> 
    )
}

const mapStateToProps = (state, props) => { 
    const id = props.match.params.id 
    return {
        ticket: state.tickets.find(ticket => ticket.ticket_code === id)
    }
}

export default connect(mapStateToProps)(TicketShow)