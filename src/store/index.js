import { createStore , applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas/index';
import { initServiceInterceptor } from '../interceptor/ServiceInterceptor';


const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
)
initServiceInterceptor(store);
sagaMiddleWare.run(rootSaga);



