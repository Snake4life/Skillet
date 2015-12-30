import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getRecommendedVideosSuccess',
      'getRecommendedVideosFail',
      'getPopularVideosSuccess',
      'getPopularVideosFail',
      'getNewVideosSuccess',
      'getNewVideosFail'
    );
  }

  getReccomendedVideos() {

  this.actions.getReccomendedVideosSuccess(recvids)
  }

  getPopularVideos() {
    var popvids = [
      {
        title: 'Hello'
      },
      {
        title:'2'
      }
    ];
    this.actions.getPopularVideosSuccess(popvids)
  }

  getNewVideos() {
    var newvids = [
      {
        title: 'Hello'
      },
      {
        title:'2'
      }
    ];
    this.actions.getPopularVideosSuccess(newvids)
  }
}

export default alt.createActions(HomeActions);
