import jwt_decode from 'jwt-decode';
import alt from '../alt';
import AuthActions from '../actions/AuthActions';
import jwt from 'jsonwebtoken';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this._user = null;
    this._jwt = null;
    this.userUUID = null;
    this.emailAttempt = '';
    this.passwordAttempt = '';
    this.failedAttempt = false;
  }

  onUpdateEmailAttempt(event) {
    this.emailAttempt = event.target.value;
  }

  onUpdatePasswordAttempt(event) {
    this.passwordAttempt = event.target.value;
  }

  onAutoLoginSuccess(data) {
    this._jwt = data.token;
    this._user = jwt_decode(data.token);
    this.userUUID = this._user.uuid
  }

  onLoginUserSuccess(data) {
    this._jwt = data.token;
    this._user = jwt_decode(data.token);
    this.userUUID = this._user.uuid
    localStorage.setItem('jwt', this._jwt);
        window.location.assign("/");
  }

  onLogoutSuccess() {
    this._user = null;
    this._jwt = null;
    window.location.assign("/");
  }

  onLoginUserFail(payload) {
    this.failedAttempt = true;
    console.log(this.failedAttempt);
    payload.alert.classList.remove('hidden');
  }

  getUser() {
    return this._user
  }

  onIsLoggedIn() {
    if (this._user) {
      return true
    }
    else {
      return false
    }
  }

}

export default alt.createStore(AuthStore);
