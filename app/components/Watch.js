import React from 'react';
import WatchActions from '../actions/WatchActions';
import WatchStore from '../stores/WatchStore';
import Video from './Video';


class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = WatchStore.getState();
    this.onChange = this.onChange.bind(this);
    var vKey = this.props.params;
    console.log(vKey);
    WatchActions.getVideoInfo(vKey);
  }
  componentDidMount() {
    WatchStore.listen(this.onChange);
  }

  componentWillUnmount() {
    WatchStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }



  render() {
    var centered = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    var vidID = this.props.params
    var vidName = 'https://s3.amazonaws.com/testskillittv/' + vidID.vKey + '.mp4';
    console.log(vidID);
    return (
      <div className="col-md-12" style={centered}>
        <div style={centered}>
      <h3>{this.state.video['title']}</h3>
      <p>{this.state.video['views'] + ' views'}</p>
      <div className="row">
              <div className="col-md-6">
      <Video src={vidName} poster="http://thumbnails.thisisepic.com/b1ce00de-e687-4c1b-97ac-afa05a287327/large/frame_0005.png" />
    </div>


  <div className="col-sm-4 col-md-4">
    <div className="thumbnail">
      <img src="../img/profileImage.png" alt="" width="100" height="100" />
      <div className="caption">
        <h3>{this.state.video['author']}</h3>
        <p>{this.state.video['description']}</p>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
    );
  }

}

export default Watch;
