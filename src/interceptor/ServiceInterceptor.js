import api from '../api/API';
import { CORE_NOTIFY_ACTION } from '../store/actions/CoreActions';
export function initServiceInterceptor(store) {
  api.interceptors.response.use(
    response => response,
    error => {
      const errorRes = error.response;
      if (errorRes) {
        store.dispatch({ type: CORE_NOTIFY_ACTION, payload: `${errorRes.status}` });
      } else {
        store.dispatch({ type: CORE_NOTIFY_ACTION, payload: 'Hata Meydana Geldi' });
      }
      return Promise.reject(error);
    },
  );
}
