import { observable, action, computed } from 'mobx';

class AuthStore {
  @observable token;
  @observable isAuthenticated = false;
  @observable isInitializing = false;

  constructor() {
    const token = localStorage.getItem('token');
    this.authenticateToken(token);
  }

  @action
  authenticateToken = async token => {
    this.isInitializing = true;
    if (token) {
      const res = await fetch('/v1/session', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (res.status === 201) this.isAuthenticated = true;
    }
    this.isInitializing = false;
  };

  @action
  logout = () => {
    localStorage.removeItem('token');
    this.token = localStorage.getItem('token');
    this.isAuthenticated = false;
  };

  @action
  login = async user_info => {
    const res = await fetch('/v1/session', {
      method: 'POST',
      body: JSON.stringify(user_info),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 201) {
      const body = await res.json();
      localStorage.setItem('token', body.token);
      this.isAuthenticated = true;
      return true;
    } else return false;
  };
}

export default new AuthStore();
