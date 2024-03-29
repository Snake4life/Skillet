import React from 'react';
import {Link} from 'react-router';

class VideoPreview extends React.Component {
  render() {
    var divStyle = {
      backgroundColor: 'white',
      padding: '10px 10px 10px 10px',
      textAlign: 'left'
    }
    var listyle = {
      display: 'inline-block',
      paddingRight: '10px',
      width: '300px',
      height: '310px'
    }
    var vKey = '/watch/' + this.props.vkey;
    var userLink = '/user/' + this.props.author;
    var thumbImgLink = 'https://s3.amazonaws.com/testskillitthumb/' + this.props.vkey + '.png';
    return (
      <li key={this.props.key} style={listyle}>
      <Link to={vKey}>
      <div style={divStyle} class="col-md-4">
      <div class="thumbnail">
        <img src={thumbImgLink} alt=""/>
        <div class="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.author}</p>
          <p>{this.props.views} views</p>
        </div>
        </div>
        </div>
        </Link>
      </li>
    )
  }
}

export default VideoPreview;
