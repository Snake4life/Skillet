import alt from '../alt';
import UploadActions from '../actions/UploadActions';

class UploadStore {
  constructor() {
    this.bindActions(UploadActions);
    this.vidTitle = "";
    this.vidDesc = "";
    this.bones = "";
    this.file = null;
    this.uploadProgress = '25%';
    this.processing = false;
    this.data_uri = null;
    this.fileName = null;
    this.fileType = null;
  }

  onUploadVideoSuccess(data) {
    console.log('hello');
    this.file = data;
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
}

export default alt.createStore(UploadStore);
