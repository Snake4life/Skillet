import alt from '../alt';

class AuthActions {
  constructor() {
    this.generateActions(
      'loginUserSuccess',
      'loginUserFail',
      'logoutUserSuccess',
      'logoutUserFail',
      'userLoggedInSuccess'
    );
  }

  loginUser(user, pass) {
    var savedJwt = window.localStorage.getItem('jwt');
    if(savedJwt) {
      var data = {
        token: savedJwt
      };
      console.log('User is already logged in');
      this.actions.loginUserSuccess(data);
//      localStorage.removeItem('jwt');
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

}

export default alt.createActions(AuthActions);
