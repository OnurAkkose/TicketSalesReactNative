import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import { getTickets, purchaseTicket } from '../../api/TicketApi';
function* getAllTickets(action) {
  try {
    const tickets = yield call(getTickets, action);
  
    yield put({
      type: 'GET_TICKETS',
      tickets: tickets,
    });
  } catch (error) {
    console.log(error);
  }
}
function* purchaseNewTicket(action) {
    try {
      const ticket = yield call(purchaseTicket, action);        
      console.log("Ticket => " + JSON.stringify(ticket));
      yield put({
        type: 'PURCHASE_TICKET',       
      });
    } catch (error) {
      console.log(error);
    }
  }

export default function* () {
  yield all([
    yield takeEvery('GET_TICKETS_REQUEST', getAllTickets),
    yield takeEvery('SET_TICKETS_REQUEST', purchaseNewTicket),
  
  ]);
}
