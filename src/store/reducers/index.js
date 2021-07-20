import { combineReducers } from 'redux';
import ticketReducer from './TicketReducer';

export default combineReducers({
 ticket: ticketReducer
});
