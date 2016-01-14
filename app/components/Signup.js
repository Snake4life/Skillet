import React from 'react';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.state = AuthStore.getState();
      this.onChange = this.onChange.bind(this);
    }

  componentDidMount() {
    AuthStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    AuthActions.registerUser({
      email: this.refs.signupForm.email.getDOMNode()
    });
  }

  render() {
    return(
      <div className="login jumbotron center-block">
        <h1>Signup</h1>
        <form ref="signupForm" role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="extra">Extra</label>
          <input type="text" className="form-control" id="password" ref="password" placeholder="Some extra information" />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    </div>

    );
  }

}

export default Signup;
