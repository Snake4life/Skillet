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
    var inputStyle = {
      height: '100',
      width: '100'
    }
    return(
      <div>
  </div>
    );
  }
}

export default Upload;
