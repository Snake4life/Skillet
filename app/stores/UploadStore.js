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
  }

  onUploadVideoSuccess(data) {
    console.log('hello');
    this.file = data;
    console.log(this.file);
  }
  onUpdateTitle(event) {
    this.vidTitle = event.target.value;
    console.log(this.vidTitle);
  }

  onUpdateDescription(event) {
    this.vidDesc = event.target.value;
  }
}

export default alt.createStore(UploadStore);
