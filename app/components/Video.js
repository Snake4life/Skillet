import React from 'react';
import ReactDOM from 'react-dom';

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
    if(this.video || !this.props.src)
      return;

//    let node = React.findDOMNode(this.refs.videoPlayer);
    let node = ReactDOM.findDOMNode(this.refs.videoPlayer);
    if(!node) 
      return;


    this.video = document.createElement('video');
    this.video.src = this.props.src;
    this.video.width = this.props.width;
    this.video.height = this.props.height;
    this.video.className = this.props.className;
    node.appendChild(this.video);
    var player = videojs(this.video, this.props);

    var options = {
      id: 'videoPlayer',
      adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
      'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
      'impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&' +
      'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&' +
      'vid=short_onecue&correlator='
    };
    player.ima(options);

    player.ima.requestAds();
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

player.play();
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
