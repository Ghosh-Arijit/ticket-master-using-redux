    import React from 'react'
    import { connect } from 'react-redux'
    import { Link } from 'react-router-dom'

    const TicketsList =(props) => {
        return(
            <div>
                <h1>Listing Tickets - {props.tickets.length}</h1>
                <ul>
                    {props.tickets.map(ticket => {
                         return <li key={ticket.id}> <Link to={`/tickets/${ticket.id}`}>{ ticket.name } </Link> </li>
                    })}
                </ul> 
                <Link to="/tickets/new" className= "btn btn-primary"> Add Ticket </Link> 
            </div>
        )
    }

    const mapStateToProps = (state) => {
        return{
            tickets: state.tickets
        }
    }

export default connect(mapStateToProps)(TicketsList)