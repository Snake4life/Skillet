import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.recentVids = [];
    this.popVids = [];
  }

  getRecentVideosSuccess(data) {
    for (var i = 0, len=data.length; i < len; i++) {
      this.recentVids.push({
        videoID: data[i].videoID,
        title: data[i].title,
        author: data[i].UserUuid,
        views: data[i].views,
        description: data[i].description
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
