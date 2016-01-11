import jwt_decode from 'jwt-decode';
import alt from '../alt';
import AuthActions from '../actions/AuthActions';
import jwt from 'jsonwebtoken';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this._user = null;
    this._jwt = null;
  }

  onAutoLoginSuccess(data) {
    this._jwt = data.token;
    this._user = jwt_decode(data.token);
  }

  onLoginUserSuccess(data) {
    this._jwt = data.token;
    this._user = jwt_decode(data.token);
    console.log(this._user);
    localStorage.setItem('jwt', this._jwt);
  }

  onLoginUserFail(data) {
    console.log("FAILL");
  }

  getUser() {
    return this._user
  }

  onIsLoggedIn() {
    return !!this._user;
  }

}

export default alt.createStore(AuthStore);
