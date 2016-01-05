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
    this.video['title'] = 'How To: Jump Start a Car';
    this.video['author'] = 'CarExpert9';
    this.video['description'] =  'Jump start a Car. Anyone who drives should know how to safely jump start' +
                    'their car because one day your battery will be dead. Whether you left your' +
                    'lights on or your battery goes bad, knowing how to jump your car safely' +
                    'and properly will keep you from getting stranded. '
    this.video['views'] = '138,107';
  }
}

export default alt.createStore(WatchStore);
