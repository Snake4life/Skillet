import alt from '../alt';
import SearchActions from '../actions/SearchActions';

class SearchStore {
  constructor() {
    this.bindActions(SearchActions);
    this.searchResults = [];
  }

  onFindVideoSuccess(data) {
    var data = data[0];
    for (var i =0, len=data.length; i<len; i++) {
      this.searchResults.push({
        videoID: data[i].videoID,
        title: data[i].title,
        author: data[i].author,
        views: data[i].views,
        description: data[i].description
      });
    }
      console.log(this.searchResults);
  }

  onFindVideoFail(payload) {
    console.log('Search failed');
  }

}

export default alt.createStore(SearchStore);
