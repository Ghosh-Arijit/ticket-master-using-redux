import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import TicketsList from './component/tickets/List'
import TicketNew from './component/tickets/New'
import TicketShow from './component/tickets/Show'

const App = (props) => {
  return(
    <BrowserRouter>
      <div className= "container">
        <h2>Ticket Master</h2>
        <ul>
          <li><Link to="/tickets">Tickets</Link></li>
        </ul>
      <Switch>
        <Route path="/tickets" component= {TicketsList} exact= { true } /> 
        <Route path="/tickets/new" component= {TicketNew} exact={true} />
        <Route path="/tickets/:id" component= {TicketShow} />
      </Switch>
      </div> 
    </BrowserRouter>
  )

}

export default App

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
