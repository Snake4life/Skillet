import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

class App extends React.Component {
  constructor() {
    super();
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {
    AuthStore.listen(this.onChange)
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    AuthActions.loginUser();
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
