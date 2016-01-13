import alt from '../alt';

class AuthActions {
  constructor() {
    this.generateActions(
      'loginUserSuccess',
      'loginUserFail',
      'logoutUserSuccess',
      'logoutUserFail',
      'autoLoginSuccess',
      'logoutSuccess',
      'isLoggedIn'
    );
  }

  loginUser(user, pass) {
    localStorage.removeItem('jwt');
    var savedJwt = localStorage.getItem('jwt');
    if(savedJwt) {
      var data = {
        token: savedJwt
      };
      console.log('User is already logged in');
      this.actions.loginUserSuccess(data);
    }
    else {
      $.ajax({
        url: '/api/authenticate',
        method: 'POST',
        data: {
          username: user,
          password: pass
        }
      })
      .done((data) => {
        this.actions.loginUserSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.loginUserFail(jqXhr)
      });
    }

  }

  logoutUser() {
    localStorage.removeItem('jwt');
    this.actions.logoutSuccess();
  }

  autoLogin() {
    console.log('Attempting autologin...');
    var token = localStorage.getItem('jwt');
    if(token) {
      var data = {
        token: token
      };
      this.actions.autoLoginSuccess(data)
    }
  }

}

export default alt.createActions(AuthActions);
