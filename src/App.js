import { useReducer } from 'react';

import ticketReducer from './reducers/ticketReducers';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import './App.css';
import './styles.css';

function App() {
  const initialState = {
    tickets: [],
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Ticketing App</h1>
        <TicketForm dispatch={dispatch} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
