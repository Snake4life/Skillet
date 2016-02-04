import React from 'react';
import {Link} from 'react-router';
import ProfileStore from '../stores/ProfileStore';
import ProfileActions from '../actions/ProfileActions';
import AuthStore from '../stores/AuthStore';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = ProfileStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProfileStore.listen(this.onChange);
    var userName = this.props.params.profile;
    var loggedName = AuthStore.state.username;
    if (userName === loggedName) {
      console.log('Its you!');
      ProfileActions.getUserInfoSuccess(AuthStore.state._user);
    } else {
    ProfileActions.getUserInfo(userName);
    }
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return(
      <div className="container">
      <img src="../img/profileImage.png" height="100" width="100"></img>
        <h1>{this.props.params.profile}</h1>
        <h2>Joined at: {this.state.joinDate}</h2>
      </div>

    );
  }
}

Profile.contextTypes = {
  router: function contextType() {
    return React.PropTypes.func.isRequired;
  }
}
export default Profile;
