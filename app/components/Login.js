import React from 'react';
import {Router, Link} from 'react-router';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();
    AuthActions.loginUser({email: AuthStore.state.emailAttempt, password: AuthStore.state.passwordAttempt, alert: this.refs.alert.getDOMNode()});
  }
  render() {
    var centerTitle = {
      textAlign: 'center'
    };
    return(
      <div className="container">
          <h1 className="logo" style={centerTitle}><a href="https://www.heroku.com" title="Heroku">Skillit.tv</a></h1>
          <div className="content">
              <div className="panel" id="login">
                  <h3 style={centerTitle}>Log in to your account</h3>
                  <form onSubmit={this.handleSubmit.bind(this)} ref="loginForm" role="form">
                    <div className="alert alert-danger hidden" ref="alert">There was a problem with your login.</div>
                      <div className="form-group">
                          <label for="email">Email address</label>
                          <div className="input-icon icon-username"></div>
                          <input className="form-control" id="email" name="email" placeholder="Email address" tabindex="1" type="email" onChange={AuthActions.updateEmailAttempt}/>
                      </div>
                      <div className="form-group">
                          <label for="password">Password</label>
                          <div className="input-icon icon-password"></div>
                          <input autocomplete="off" className="form-control password" id="password" name="password" placeholder="Password" tabindex="2" type="password" onChange={AuthActions.updatePasswordAttempt}/>
                      </div>
                      <button className="btn btn-primary btn-lg btn-block"tabindex="3" type="submit">Log In</button>
                  </form>
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
