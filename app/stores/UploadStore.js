import alt from '../alt';
import UploadActions from '../actions/UploadActions';

class UploadStore {
  constructor() {
    this.bindActions(UploadActions);
    this.vidTitle = "";
    this.vidDesc = "";
    this.bones = "";
    this.file = null;
    this.uploadProgress =0;
    this.processing = false;
    this.data_uri = null;
    this.fileName = null;
    this.fileType = null;
    this.signedURL = null;
  }

  onUpdateSignedUrl(data) {
    this.signedURL = data;

  }
  onUploadVideoSuccess(data) {
    this.file = data;
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
