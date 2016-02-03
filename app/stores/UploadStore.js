import alt from '../alt';
import UploadActions from '../actions/UploadActions';

class UploadStore {
  constructor() {
    this.bindActions(UploadActions);
    this.vidTitle = "";
    this.vidDesc = "";
    this.file = null;
    this.uploadProgress = 0;
    this.fileName = null;
    this.fileType = null;
    this.signedURL = null;
    this.videoID = null;
  }

  onUploadVideoSuccess(payload) {
    this.file = payload.file;
    this.videoID = payload.vidID;
    console.log(this.videoID);
  }

  onUpdateProgress(percentage) {
    console.log('hi');
    this.uploadProgress = percentage + '%';
  }
  onUpdateTitle(event) {
    this.vidTitle = event.target.value;
    console.log(this.vidTitle);
  }

  onUpdateDescription(event) {
    this.vidDesc = event.target.value;
  }

  onUploadVideoFail() {
    console.log('nah');
  }

  onGetTheFile() {
    return this.file;
  }

  onGetSignedURL() {
    return this.signedURL;
  }
}

export default alt.createStore(UploadStore);
