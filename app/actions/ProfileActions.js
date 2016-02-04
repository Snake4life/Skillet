import alt from '../alt';
import {assign} from 'underscore';

class ProfileActions {
  constructor() {
    this.generateActions(
      'getUserInfoSuccess',
      'getUserInfoFail'
    );
  }

  getUserInfo(userName) {
    $.ajax({
      url: '/api/getUser',
      method: 'GET',
      data: {
        username: userName
      }
    }).done((data) => {
      console.log(data);
      this.actions.getUserInfoSuccess(data);
    }).fail((error) => {
      console.log(error);
      this.actions.getUserInfoFail(error);
    });
  }


}

export default alt.createActions(ProfileActions);
