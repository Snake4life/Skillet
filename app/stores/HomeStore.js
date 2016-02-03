import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
/*    this.recendVids = [
      {
        vkey: '1',
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
    ]; */
    this.recentVids = [];
    this.popVids = [];
  }

  getRecentVideosSuccess(data) {
    for (var i = 0, len=data.length; i < len; i++) {
      this.recentVids.push({
        videoID: data[i].videoID,
        title: data[i].title,
        author: data[i].description,
        user: data[i].UserUuid
      });
    }
    console.log(this.recentVids);
  }

  getPopularVideosSuccess(data) {
    this.popVids = data;
  }

  getRecentVideosFail() {
    console.log('Failed to Load Recent Videos');
  }

}

export default alt.createStore(HomeStore);
