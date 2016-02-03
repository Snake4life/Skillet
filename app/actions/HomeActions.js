import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getRecommendedVideosSuccess',
      'getRecommendedVideosFail',
      'getPopularVideosSuccess',
      'getPopularVideosFail',
      'getRecentVideosSuccess',
      'getRecentVideosFail'
    );
  }

  getReccomendedVideos() {

  this.actions.getReccomendedVideosSuccess(recvids)
  }

  getRecentVideos() {
    console.log('Retrieving Recent Videos');
    $.ajax({
      url: '/api/recentVideos',
      type: 'GET'
    }).done((data) => {
      console.log(data);
      this.actions.getRecentVideosSuccess(data);
    }).fail(() => {
      this.actions.getRecentVideosFail();
    })
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
