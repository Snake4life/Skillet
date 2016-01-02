import React from 'react';
import HomeActions from '../actions/WatchActions';
import HomeStore from '../stores/WatchStore';

class Watch extends React.Component {


  render() {
    return (
      <div>
      <h3>{this.props.params.vKey}</h3>
<iframe src="//content.jwplatform.com/players/ZzJi8ynT-9lmC29nz.html" width="480" height="270" frameborder="0" scrolling="auto" allowfullscreen></iframe>
<video width="480" height="270" autoplay>
  <source src="" type="video/mp4"/>
Your browser does not support the video tag.
</video>
      </div>
    );
  }

}

export default Watch;
