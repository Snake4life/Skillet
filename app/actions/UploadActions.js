import alt from '../alt';

class UploadActions {
  constructor() {
    this.generateActions(
      'updateTitle',
      'updateDescription',
      'uploadVideoSuccess',
      'uploadVideoFail'
    );
    }

    uploadVideoS3(file) {
      console.log(file.name);
      $.ajax({
					url: '/api/S3',
					type: 'GET',
					data: {name: file.name, size: file.size, type:file.type},
        }).done((data) => {
          console.log('here we go')
          console.log(file);
          console.log(data.signed_request);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", data.signed_request);
          xhr.setRequestHeader('x-amz-acl', 'public-read');
          xhr.onload = function() {
          if (xhr.status === 200) {
            console.log('sweet');
            }
          };
          xhr.onerror = function() {
            alert("Could not upload file.");
          };
          xhr.send(file);
        });/*
          $.ajax({
            url: data.signedrequest,
            method: 'PUT',
            data: file,
            cache: false,
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
          }).done((data) => {
            this.actions.uploadVideoSuccess(data);
          }).fail(() => {
              this.actions.uploadVideoFail();
            });
          });
          */
        }

    uploadVideoData(data) {
      //UPLOAD VIDEO META DATA TO POSTGRES
    }

  }

export default alt.createActions(UploadActions);
