import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from "./store/configureStore"
import App from './App';
import { startSetTickets } from "./actions/tickets" 
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'


const store= configureStore()

store.subscribe(()=> {
    console.log(store.getState())
})

const app= (
    <Provider store= {store}>
        <App />
    </Provider>

)

//store.dispatch(addTicket({ id: "1", name: 'ravi', message: 'net is down', department: 'technical', priority: 'high'}))
store.dispatch(startSetTickets())

ReactDOM.render(app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

