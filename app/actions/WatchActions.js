import alt from '../alt';
import {assign} from 'underscore';

class WatchActions {
  constructor() {
    this.generateActions(
      'getVideoInfoSuccess',
      'getVideoInfoFail'
    );
    }

  getVideoInfo(vkey) {
    console.log('buns');
    console.log(vkey.vKey);
    $.ajax({
      url: '/api/getVideo',
      type: 'GET',
      data: {
        vkey: vkey.vKey
      }
    }).done((data) => {
      this.actions.getVideoInfoSuccess(data);
    }).fail((error) => {
    this.actions.getVideoInfoFail(error);
  });
}
  }

export default alt.createActions(WatchActions);
