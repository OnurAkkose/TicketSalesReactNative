import api from './API';

export function getTickets() {
  console.log("herere");
  return api
    .get('/Ticket')
    .then(({ data }) => data)
    .catch(error => ({ error }));
}

export function purchaseTicket(action){  
  console.log("asction => " + JSON.stringify(action));
  return api
    .get(`/Ticket/ticketSales/${action.itemId}`)
    .then(({ data }) => data)
    .catch(error => ({ error }));
}
