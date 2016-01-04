import React from 'react';

class Video extends React.Component {


  componentDidMount() {
    this.checkIfVideoNeedsInstallation();
  }

  componentDidUpdate() {
    this.checkIfVideoNeedsInstallation();
  }

  checkIfVideoNeedsInstallation() {
    if(!this.props.src)
      return;

    this.loadVideo();
  }

  loadVideo() {
/*
    vidoejs.plugin('ads-setup', function (opts) {
      var player = this;
      var adsCancelTimeout = 3000;

      var vastAd = player.vastClient({
        url: "http://videoads.theonion.com/vast/270.xml",
        playAdAlways: true,
        adsCancelTimeout: adsCancelTimeout,
        adsEnabled: !!options.adsEnabled
      });
    });
*/    
    let node = React.findDOMNode(this.refs.videoPlayer);

    this.video = document.createElement('video');
    this.video.src = this.props.src;
    this.video.width = this.props.width;
    this.video.height = this.props.height;
    this.video.className = this.props.className;
    node.appendChild(this.video);
    videojs(this.video, this.props);
  }

  render() {
    return <div ref="videoPlayer" />
  }
}


Video.propTypes = {
  poster: React.PropTypes.string,
  src: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  className: React.PropTypes.string,
  controls: React.PropTypes.bool,
  autoplay: React.PropTypes.bool,
  preload: React.PropTypes.string,
  dataSetup: React.PropTypes.string
};
Video.defaultProps = {
  poster: null,
  src: null,
  width: 640,
  height: 360,
  className: 'video-js vjs-default-skin vjs-big-play-centered',
  controls: true,
  autoplay: false,
  preload: 'auto',
  dataSetup: '{}'
};

export default Video;
