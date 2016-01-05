import alt from '../alt';

class WatchActions {
  constructor() {
    this.generateActions(
      'getVideoInfoSuccess',
      'getVideoInfoFail'
    );
    }

  getVideoInfo(data) {
    this.actions.getVideoInfoSuccess(data);
  }
  }
  export default alt.createActions(WatchActions);
