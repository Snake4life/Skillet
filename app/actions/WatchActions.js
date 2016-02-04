import alt from '../alt';

class WatchActions {
  constructor() {
    this.generateActions(
      'getVideoInfoSuccess',
      'getVideoInfoFail'
    );
    }

  getVideoInfo(vKey) {
    $.ajax({
      url: '/api/getVideo',
      type: 'GET',
      data: {
        vkey: vKey.vKey
      }
    }).done((data) => {
      this.actions.getVideoInfoSuccess(vKey);
    }).fail((error) => {
    this.actions.getVideoInfoFail();
  });
}
  }

export default alt.createActions(WatchActions);
