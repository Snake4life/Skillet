import alt from '../alt';
import SignupActions from '../actions/SignupActions';
import AuthActions from '../actions/AuthActions';

class SignupStore {
  constructor() {
    this.bindActions(SignupActions);
    this.email = "";
    this.username = "";
    this.fullName = "";
    this.password = "";

  }

  onUpdateEmail(event) {
    this.email = event.target.value;
    }

  onUpdateUsername(event) {
    this.username = event.target.value;
  }

  onUpdateFullName(event) {
    this.fullName = event.target.value;
  }

  onUpdatePassword(event) {
    this.password = event.target.value;
  }

  onSignupUserSuccess(data) {
    console.log(data.email);
    console.log(data.password);
    AuthActions.loginUser(data.email, data.password);
    window.location.assign("/");
  }

  onSignupUserFail(data){
    console.log('FAil');
  console.log(data);
  }

}

export default alt.createStore(SignupStore);
