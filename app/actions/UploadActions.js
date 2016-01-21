import alt from '../alt';

class UploadActions {
  constructor() {
    this.generateActions(
      'updateTitle',
      'updateDescription',
      'uploadVideoSuccess',
      'uploadVideoFail'
    );
    }

    uploadVideo(data) {
      this.actions.uploadVideoSuccess(data);
    }

  }

export default alt.createActions(UploadActions);
