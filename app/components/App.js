import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import AuthStore from '../stores/AuthStore';

class App extends React.Component {

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
