import alt from '../alt';

class WatchActions {
  constructor() {
    this.generateActions(
      'getVideoInfoSuccess',
      'getVideoInfoFail'
    );
    }

  getVideoInfo(vKey) {
    this.actions.getVideoInfoSuccess(vKey);
  }
  }

export default alt.createActions(WatchActions);
