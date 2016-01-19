import React from 'react';
import {Router, Link} from 'react-router';
import AuthActions from '../actions/AuthActions';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    AuthActions.logoutUser();
  }

  render() {
    return(
      <div></div>
    );
  }
}

export default Logout;
