import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import alt from '../alt';

class App extends React.Component {
  constructor() {
    super();
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AuthStore.listen(this.onChange);
    console.log(this.state._user);
    AuthActions.autoLogin();
  }

  onChange(state) {
    this.setState(state);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }

  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
