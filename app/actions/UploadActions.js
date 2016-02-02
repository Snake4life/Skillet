import alt from '../alt';
import AuthStore from '../stores/AuthStore';

class UploadActions {
  constructor() {
    this.generateActions(
      'updateTitle',
      'updateDescription',
      'uploadVideoSuccess',
      'uploadVideoFail',
      'updateProgress',
      'updateSignedUrl',
      'getTheFile',
      'getSignedURL'
    );
    }


    /*
    	Function to get the temporary signed request from the app.
    	If request successful, continue to upload the file using this signed
    	request.
    */

    uploadVideoS3(file, userUUID) {
      $.ajax({
	       url: '/api/createVideo',
	       type: 'PUT',
	       data: {userUUID: userUUID}
        }).done((data) => {
          this.actions.uploadVideoSuccess(file);
          var vidID = data.videoID;
          $.ajax({
            url: '/api/sign_s3',
            type: 'POST',
            data: {
              file_name: vidID,
              file_type: file.type
            }
          }).done((response) => {
            console.log(response.signed_request);
            console.log(file);
            this.actions.uploadTheVideo(file, response.signed_request);
          }).fail((error) => {
            //console

		    });
      }).fail((error) => {
			      //Could not upload video
		  });
    }

        /*
            Function to carry out the actual PUT request to S3 using the signed request from the app.
        */
          uploadTheVideo(file, signed_request) {

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", signed_request);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("file uploaded successfully!");
        }
    };
    xhr.onerror = function() {
        alert("Could not upload file.");
    };

    xhr.addEventListener('progress', function(e) {
      var percentComplete = Math.round(e.loaded * 100 / e.total);
      console.log(percentComplete);
      this.actions.updateProgress(percentComplete);
    });

    xhr.send(file);
}
/*
            console.log(file);
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", signed_request);
            xhr.setRequestHeader('x-amz-acl', 'public-read');
            xhr.onload = function() {
                if (xhr.status === 200) {
                  //Make Load screen
                  alert("File Uploaded Successfully!");
                }
            };
            xhr.onerror = function() {
                alert("Could not upload file.");
                console.log(xhr.error);
            };

            xhr.upload.addEventListener('progress', function(e) {
              var percentComplete = Math.round(e.loaded * 100 / e.total);
              this.actions.updateProgress(percentComplete);
            });


            xhr.send();
        }*/

  }

export default alt.createActions(UploadActions);
