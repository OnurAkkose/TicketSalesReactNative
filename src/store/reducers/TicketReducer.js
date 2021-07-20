import { GET_TICKETS, PURCHASE_TICKET } from "../actions/TicketActions";

const TICKET_INIT_STATE = {
  tickets: [],
};
const ticketReducer = (state = TICKET_INIT_STATE, action) => {

  switch (action.type) {
    case GET_TICKETS:
        return {
            ...state,
           tickets: action.tickets,
        };
    case PURCHASE_TICKET:
      
        return state;
  }
  return state;
};

export default ticketReducer;
