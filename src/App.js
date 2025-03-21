import { useReducer } from 'react';

import ticketReducer from './reducers/ticketReducers';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import { SortTickets } from './utils/sortUtil';
import './App.css';
import './styles.css';

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: 'High to Low',
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = SortTickets(
    state.tickets,
    state.sortPreference
  );

  return (
    <div className="App">
      <div className="container">
        <h1>Ticketing App</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({
                  type: 'SET_SORT',
                  payload: e.target.value,
                })
              }
            >
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>
            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
