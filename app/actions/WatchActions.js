import alt from '../alt';

class WatchActions {
  constructor() {
    this.generateActions(
      'getVideoInfoSuccess',
      'getVideoInfoFail'
    );
    }

  getVideoInfo(vKey) {
    if(vKey) {
    this.actions.getVideoInfoSuccess(vKey);
  } else {
    this.actions.getVideoInfoFail();
  }
}
  }

export default alt.createActions(WatchActions);
