import React from 'react';
import UploadStore from '../stores/UploadStore';
import UploadActions from '../actions/UploadActions';
import AuthStore from '../stores/AuthStore';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = UploadStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    UploadStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UploadStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  onDrop(e) {
    e.preventDefault();

    this.state.processing = true;
    const reader = new FileReader();
    const file = e.target.files[0];
    var userUUID = AuthStore.state.userUUID;
    UploadActions.uploadVideoS3(file, userUUID);

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.videoID);
    UploadActions.uploadVideoPG({
      title: this.state.vidTitle,
      description: this.state.vidDesc,
      vidID: this.state.videoID
    });
  }

  render() {
    var inputStyle = {
      height: '100',
      width: '100'
    };
    var stuff = {
    position: 'relative',
    overflow: 'hidden'
    };
    var inputStyle = {
      position: 'absolute',
      top: '0',
      right: '0',
      minWidth: '100%',
      minHeight: '100',
      fontSize: '100px',
      textAlign: 'right',
      filter: 'alpha(opacity=0)',
      opacity: '0',
      outline: 'none',
      background: 'white',
      cursor: 'inherit',
      display:'block'
    }
    var progressStyle = {
      width: this.state.uploadProgress
    };

    if(UploadStore.state.file) {
      var uploadElement = (
        <div>
        <p>{this.state.file.name}</p>

          <div class="container">
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="70" ariaValuemin="0" ariaValuemax="100" style={progressStyle}>
          {this.state.uploadProgress}
        </div>
      </div>
    </div>
</div>
      );
    } else {
      var uploadElement = (
<span className="btn btn-default btn-file" style={stuff}>Select File to Upload<input style={inputStyle} ref="file" type="file" onChange={this.onDrop.bind(this)}/></span>
      );
    }

    return(

      <div className="container">
                    <h3>Upload</h3>
        <div className="content">
          <div className="panel" id="upload">
            <form ref="upload" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                {uploadElement}
              </div>
              <div className="form-group">
                <label htmlFor="username">Title</label>
                <input type="text" className="form-control" id="username" placeholder="Title" onChange={UploadActions.updateTitle} />
              </div>
              <div className="form-group">
                <label htmlFor="username">Description</label>
                <textarea type="text" rows="4" className="form-control" id="username" placeholder="Description" onChange={UploadActions.updateDescription}></textarea>
              </div>
              <button className='btn btn-default'>Upload</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
