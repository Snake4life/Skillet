import alt from '../alt';

class UploadActions {
  constructor() {
    this.generateActions(
      'getVideoInfoSuccess',
      'getVideoInfoFail'
    );
    }
  }

export default alt.createActions(UploadActions);
