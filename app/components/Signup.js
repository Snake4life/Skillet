import React from 'react';
import SignupActions from '../actions/SignupActions';
import SignupStore from '../stores/SignupStore';
import AuthActions from '../actions/AuthActions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.state = SignupStore.getState();
      this.onChange = this.onChange.bind(this);
    }

  componentDidMount() {
    SignupStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SignupStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();

    SignupActions.signupUser({
      email: this.state.email,
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password
    });

  }

  render() {
    return(
      <div className='container col-sm-8'>
      <div className="login jumbotron center-block">
        <h1>Signup</h1>
        <form ref="signupForm" role="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="email" className="form-control" id="username" placeholder="Email" onChange={SignupActions.updateEmail} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Display Name" onChange={SignupActions.updateUsername}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Full Name</label>
          <input type="text" className="form-control" id="username" placeholder="Full Name" onChange={SignupActions.updateFullName}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" ref="password" placeholder="Password" onChange={SignupActions.updatePassword}/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
</div>
    );
  }

}

export default Signup;
