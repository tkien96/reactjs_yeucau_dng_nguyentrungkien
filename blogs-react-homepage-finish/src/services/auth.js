import { api } from './api';

const authService = {
  login(params) {
    return api.call().post('/jwt-auth/v1/token', params);
  }
}

export default authService;