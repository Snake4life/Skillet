import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import alt from '../alt';

class App extends React.Component {
  constructor() {
    super();

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
