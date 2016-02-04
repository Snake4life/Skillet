import React from 'react';
import WatchActions from '../actions/WatchActions';
import WatchStore from '../stores/WatchStore';
import Video from './Video';


class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = WatchStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    WatchStore.listen(this.onChange);
    console.log('Hello');
    console.log(this.props.params);
    WatchActions.getVideoInfo(this.props.params);
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
    var videoDiv = {
      marginLeft: '150px',
      marginRight: '50px',
      width: '660px'
    };
    var centerText = {
      textAlign: 'left'
    };
    var vidID = this.props.params;
    var vidName = 'https://s3.amazonaws.com/testskillittv/' + vidID.vKey + '.mp4';
    var poster = vidName.replace(/.mp4/, '.jpg');
    return (
      <div className="row">
        <div style={videoDiv}>
          <h1 style={centerText}>{this.state.video['title']}</h1>
          <h3 style={centerText}>{this.state.video['views'] + ' views'}</h3>
          <Video src={vidName} poster={poster} />
</div>
</div>


    );
  }

}

export default Watch;
