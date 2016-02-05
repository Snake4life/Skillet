import React from 'react';
import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';
import VideoPreview from './VideoPreview';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SearchStore.listen(this.onChange);
    SearchActions.findVideo(this.props.params.query);
  }

  componentWillUnmount() {
    SearchStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let searchResults = this.state.searchResults.map((video) => {
      return(
        <VideoPreview key={video.videoID} vkey={video.videoID} title={video.title} views={video.views} author={video.author}></VideoPreview>
      )
    });
    return(
      <div>
      <h1>Loading your results...</h1>
      {searchResults}
      </div>
    );
  }
}

export default Search;
