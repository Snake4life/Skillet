import alt from '../alt';

class AuthActions {
  constructor() {
    this.generateActions(
      'updatePasswordAttempt',
      'getPassAttempt',
      'updateEmailAttempt',
      'getEmailAttempt',
      'loginUserSuccess',
      'loginUserFail',
      'logoutUserSuccess',
      'logoutUserFail',
      'autoLoginSuccess',
      'logoutSuccess',
      'logoutFail',
      'isLoggedIn',
      'registerUserSuccess',
      'registerUserFail'
    );
  }


  loginUser(payload) {
      $.ajax({
        url: 'api/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .done((data) => {
        console.log(data);
        this.actions.loginUserSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.loginUserFail(payload)
      });
    }


  logoutUser() {
    localStorage.removeItem('jwt');
    var token = localStorage.getItem('jwt');
    if(!token) {
      this.actions.logoutSuccess();
    } else {
      this.actions.logoutFail();
    }
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
