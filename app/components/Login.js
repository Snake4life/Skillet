import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
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
  <form role="form">
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="email" ref="email" className="form-control" placeholder="Email"/>
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

export default Login;
