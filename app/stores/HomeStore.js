import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.recVids = [
      {
        vkey: '00001',
        title: 'How To: Jump Start a Car',
        author: 'CarExpert9',
        views: '138,107'
      },
      {
        vkey: '00002',
        title:'How To: Open a wine bottle',
        author: 'Somal1',
        views: '47,493'
      },
      {
        vkey: '00003',
        title:'How To: Tie a tie',
        author: 'DressForSuccess',
        views: '104,133'
      },
      {
        vkey: '00004',
        title:'How To: Do a kickflip',
        author: 'Skrillskill',
        views: '89,192'
      }
    ];
    this.popVids = [];
    this.newVids = [];
  }

  getReccomendedVideosSuccess(data) {
    this.recVids = data;
    print(this.recVids);
  }

  getPopularVideosSuccess(data) {
    this.popVids = data;
  }

  getNewVideosSuccess(data) {
    this.newVids = data;
  }

}

export default alt.createStore(HomeStore);
