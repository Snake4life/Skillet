import alt from '../alt';

class SignupActions {
  constructor() {
    this.generateActions(
      'updateEmail',
      'updateUsername',
      'updatePassword',
      'updateFullName',
      'signupUserSuccess',
      'signupUserFail'
    );
  }

  signupUser(payload) {
    $.ajax({
      url: 'api/signup',
      method: 'POST',
      data: {
        email: payload.email,
        username: payload.username,
        fullName: payload.fullName,
        password: payload.password
      }
    }).done((data) => {
      this.actions.signupUserSuccess(payload);
    }).fail(() => {
      this.actions.signupUserFail(payload);
    });
  }




}

export default alt.createActions(SignupActions);
