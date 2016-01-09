import alt from '../alt';
import UploadActions from '../actions/UploadActions';

class UploadStore {
  constructor() {
    this.bindActions(UploadActions);
    this.files = [];
  }

}

export default alt.createStore(UploadStore);
