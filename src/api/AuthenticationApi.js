import api from './API';

export function getUserInfo(action) {
  return api
    .post(`/login?userName=${action.email}&password=${action.password}`)
    .then(({ data }) => data)
    .catch((error) => ({error}));
}
