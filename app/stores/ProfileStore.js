import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.joinDate = null;
  }

  onGetUserInfoSuccess(data) {
    console.log(data);
    var dateJoined =  String(new Date(data.createdAt)).substring(4).split(' ');
    dateJoined = dateJoined[0] + " " + dateJoined[1] + " " + dateJoined[2]
    this.joinDate = dateJoined;
    console.log(this.joinDate);
  }

  onGetUserInfoFail(data) {
    console.log('FAILLL');
  }
}

export default alt.createStore(ProfileStore);
