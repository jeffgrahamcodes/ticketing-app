import { useReducer } from 'react';

import ticketReducer from './reducers/ticketReducers';
import TicketForm from './components/TicketForm';
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
      </div>
    </div>
  );
}

export default App;
