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
    if (this.state.recentVids.length === 0) {
      HomeActions.getRecentVideos();
    }
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  render() {
    var ulStyle = {
      listStyleType: 'none',
      paddingBottom: '100px'
    }
    let recentVideos = this.state.recentVids.map((video) => {
      return (
          <VideoPreview key={video.videoID} vkey={video.videoID} title={video.title} views={video.views} author={video.author}></VideoPreview>
      )
    });
    return (
      <div className="col-md-12 col-centered">
        <ul style={ulStyle}>
          <li>
            <div className="col-md-12 col-centered">
              <div className='page-header'>
                <h3>Featured</h3>
                </div>

              <ul className='pager'>
                {recentVideos}
              </ul>

            </div>
          </li>
        <li>
          <div className="col-md-12 col-centered">
            <div className='page-header'>
              <h3>New</h3>
              </div>

            <ul className='pager'>
              {recentVideos}
            </ul>

          </div>
        </li>

      </ul>
      </div>
    );
  }
}

export default Home;
