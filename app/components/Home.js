import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';
import VideoPreview from './VideoPreview';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getRecommendedVideos();
    HomeActions.getPopularVideos();
    HomeActions.getNewVideos();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  render() {
    var ulStyle = {
      listStyleType: 'none'
    }
    let recommendedVideos = this.state.recVids.map((video) => {
      return (
          <VideoPreview key={video.vkey} vkey={video.vkey} title={video.title} views={video.views} author={video.author}></VideoPreview>
      )
    });
    return (
      <div className="col-md-12 col-centered">
        <ul style={ulStyle}>
          <li>
            <div className="col-md-12 col-centered">
              <div className='page-header'>
                <h3>For You</h3>
                </div>

              <ul className='pager'>
                {recommendedVideos}
              </ul>

            </div>
          </li>
        <li>
          <div className="col-md-12 col-centered">
            <div className='page-header'>
              <h3>Popular</h3>
              </div>

            <ul className='pager'>
              {recommendedVideos}
            </ul>

          </div>
        </li>
        <li>
          <div className="col-md-12 col-centered">
            <div className='page-header'>
              <h3>New</h3>
              </div>

            <ul className='pager'>
              {recommendedVideos}
            </ul>

          </div>
        </li>
      </ul>
      </div>
    );
  }
}

export default Home;
