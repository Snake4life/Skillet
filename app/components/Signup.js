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
      password: this.state.password,
      alert: this.refs.alert.getDOMNode()
    });

  }

  render() {
    var fix = {
      marginTop: '2rem',
      marginBottom: '2.6rem'
    };
    return(

<div className="container">
  <header>
    <a className="logo" href="https://www.heroku.com/home"></a>
    <h1 className="h2">Sign up and experience Skillit.tv today</h1>
    <hr />
  </header><p className="alert error hidden" id="fill-all-fields"></p>
  <div className="row">
    <div className="benefits col-md-6">
      <h2 className="h3">Content</h2>
      <p>Enjoy the best educational videos and learn something new, or create your own and share your skills with the world.</p>
      <h2 className="h3">Community</h2>
      <p>A thriving community and supportive community to help your learning process be as easy as possible</p>
      <h2 className="h3">Compensation</h2>
      <p>As a content creator, see direct rewards for your contribution with our industry leading compensation plan.</p>
    </div>
    <div className="signup col-md-6">
      <form ref="signupForm" role="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="alert alert-danger hidden" ref="alert">That email is taken</div>
      <div className="form-group" style={fix}>
        <label htmlFor="username">Email</label>
        <input type="email" className="form-control input-lg" id="username" placeholder="Email" onChange={SignupActions.updateEmail} />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control input-lg" id="username" placeholder="Display Name" onChange={SignupActions.updateUsername}/>
      </div>
      <div className="form-group">
        <label htmlFor="username">Full Name</label>
        <input type="text" className="form-control input-lg" id="username" placeholder="Full Name" onChange={SignupActions.updateFullName}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control input-lg" id="password" ref="password" placeholder="Password" onChange={SignupActions.updatePassword}/>
      </div>
      <input className="form-control btn btn-default input-lg" tabindex="5" type="submit" value="Create Account" />
    </form>
      <h5 className="login">Already have an account? &nbsp;<a href="https://id.heroku.com/login">Log In</a>
      </h5></div>
  </div>
</div>

    );
  }

}

export default Signup;
