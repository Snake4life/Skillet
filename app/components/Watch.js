import React from 'react';
import HomeActions from '../actions/WatchActions';
import HomeStore from '../stores/WatchStore';
import Video from './Video';


class Watch extends React.Component {

  componentDidMount() {

  }

  render() {
    var centered = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    var vidName = 'http://videos.thisisepic.com/2b9c1bf3-e19b-4be5-9d36-246c5d3607d8/high.mp4'
    return (
      <div className="col-md-11 col-centered">
        <div>
      <h3>{this.props.params.vKey}</h3>
      <Video src={vidName} poster="http://thumbnails.thisisepic.com/b1ce00de-e687-4c1b-97ac-afa05a287327/large/frame_0005.png" />
</div>
      </div>
    );
  }

}

export default Watch;
