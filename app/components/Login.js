import React from 'react';
import {Router, Link} from 'react-router';
import AuthActions from '../actions/AuthActions';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  handleSubmit(e) {
    e.preventDefault();
    const email = 'aaa@gmail.com'
    const password = 'aaa'
    AuthActions.loginUser({email: email, password: password});
  }
  render() {
    return(
      <div className='container'>
<div className='row flipInX animated'>
<div className='col-sm-8'>
<div className='panel panel-default'>
  <div className='panel-heading'>Login</div>
  <div className='panel-body'>
  <div className="login jumbotron center-block">
  <h1>Login</h1>
  <form role="form" onSubmit={this.handleSubmit.bind(this)}>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" ref="username" className="form-control" placeholder="Username"/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" ref="password" className="form-control" id="password" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
    );
  }
}

Login.contextTypes = {
  router: function contextType() {
    return React.PropTypes.func.isRequired;
  }
}

export default Login;
