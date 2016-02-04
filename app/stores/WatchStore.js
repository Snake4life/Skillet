import alt from '../alt';
import WatchActions from '../actions/WatchActions';

class WatchStore {
  constructor() {
    this.bindActions(WatchActions);
    this.video = {
      'title' : '',
      'author' : '',
      'description': '',
      'views' : '138,107',
      'comments' : [{}]
    }
  }

  onGetVideoInfoSuccess(data) {
    this.video['title'] = data.title;
    this.video['author'] = data.UserUuid;
    this.video['description'] =  data.description;
    this.video['views'] = data.views;
  }

  onGetVideoInfoFail() {
    this.video['title'] = 'Title Not Found';
    this.video['author'] = 'Error';
    this.video['description'] =  'Error'
    this.video['views'] = 'Error';
  }
}

export default alt.createStore(WatchStore);
