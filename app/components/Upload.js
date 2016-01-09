import React from 'react';
import Dropzone from 'react-dropzone';
import UploadStore from '../stores/UploadStore';
import DropzoneComponent from 'react-dropzone-component';



class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = UploadStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onDrop(files) {
    this.setState({
      files: files
    });
  }
  onOpenClick() {
    this.refs.dropzone.open();
  }

  onChange(state) {
    this.setState(state);
  }

  getInitialState() {
    return {
  files: []
};
  }

  render() {
    var componentConfig = {
    iconFiletypes: ['.mp4'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

var djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,image/gif"
};

var callbackArray = [
    function () {
        console.log('Look Ma, I\'m a callback in an array!');
    },
    function () {
        console.log('Wooooow!');
    }
];

var simpleCallBack = function () {
    console.log('I\'m a simple callback');
};


var eventHandlers = {
    // All of these receive the event as first parameter:
    drop: callbackArray,
    dragstart: null,
    dragend: null,
    dragenter: null,
    dragover: null,
    dragleave: null,
    // All of these receive the file as first parameter:
    addedfile: simpleCallBack,
    removedfile: null,
    thumbnail: null,
    error: null,
    processing: null,
    uploadprogress: null,
    sending: null,
    success: null,
    complete: null,
    canceled: null,
    maxfilesreached: null,
    maxfilesexceeded: null,
    // All of these receive a list of files as first parameter
    // and are only called if the uploadMultiple option
    // in djsConfig is true:
    processingmultiple: null,
    sendingmultiple: null,
    successmultiple: null,
    completemultiple: null,
    canceledmultiple: null,
    // Special Events
    totaluploadprogress: null,
    reset: null,
    queuecompleted: null
};
    return(
      <div>
      <Dropzone ref="dropzone" onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      <button type="button" onClick={this.onOpenClick}>
          Open Dropzone
      </button>
      {this.state.files.length > 0 ? <div>
      <h2>Uploading {this.state.files.length} files...</h2>
      <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
      </div> : null}
        <DropzoneComponent config={componentConfig}
                   eventHandlers={eventHandlers}
                   djsConfig={djsConfig} />
      </div>
    );
  }
}

export default Upload;
