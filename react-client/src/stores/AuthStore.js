import { observable, action, computed } from 'mobx';

class AuthStore {
  @observable token = sessionStorage.getItem('token');

  @action
  authenticateToken = token => {
    sessionStorage.setItem('token', token);
    this.token = token;
  };

  @action
  deauthenticateToken = () => {
    sessionStorage.removeItem('token');
    this.token = sessionStorage.getItem('token');
  };

  @computed
  get isAuthenticated() {
    return this.token != null;
  }

  @computed
  get getToken() {
    return this.token;
  }
}

export default new AuthStore();
