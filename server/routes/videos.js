var express = require('express');
var knox = require('knox');
var aws = require('aws-sdk');
var models  = require('../models');



var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY;
var S3_BUCKET = process.env.S3_BUCKET_NAME;



module.exports = function(app) {
/*
 * Respond to GET requests to /sign_s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and the
 * anticipated URL of the image.
 */
app.post('/api/sign_s3', function(req, res){
    var values = req.body.file_type.split(".");
    var fileExtension = "." + values[1];
    console.log(fileExtension);
    var fileName = req.body.file_name + fileExtension;
    console.log(fileName);

    aws.config.update({accessKeyId: AWS_ACCESS_KEY , secretAccessKey: AWS_SECRET_KEY });
    aws.config.update({region: 'us-east-1' , signatureVersion: 'v4' });
    var s3 = new aws.S3();
    var s3_params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: req.body.file_type,
        ACL: 'public-read'
    };
    s3.getSignedUrl('putObject', s3_params, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            var return_data = {
                signed_request: data,
                url: 'https://'+S3_BUCKET+'.s3.amazonaws.com/'+fileName
            };
            res.send(return_data);
            res.end();
        }
    });
});

app.put('/api/createVideo', function(req, res) {
    models.Video.create({
        title: "Video Title",
        views: 0,
        UserUuid: req.body.userUUID
    }).then(function(videoData) {
        res.send(videoData);
        res.end();
    }).catch(function(error) {
        res.send(error);
    });
});

app.post('/api/updateVideo', function(req, res) {
    models.Video.find({
        where: {videoID: req.body.vidID}})
      .then(function(video) {
        if(video) {
            video.updateAttributes({
                title: req.body.title,
                description: req.body.description
            }).then(function(data) {
              console.log(data);
                res.send(data);
            }).catch(function(error) {
                res.send('Could not update video fields');
            });
        } else {
            res.send('Error on video upload');
        }
    }).catch(function(error) {
        res.send('Video upload corrupted.');
    });
});

app.get('/api/getVideo', function(req, res) {
    var params = req.query;
    console.log(params.vkey);
    models.Video.find({
      where: {
        videoID: params.vkey
    }}).then(function(video) {
      if (video){
        res.send(video);
      }
    }).catch(function(error) {
              res.status(500).send({error: 'Could not load video'});
    });
});


app.get('/api/recentVideos', function(req, res) {
    models.Video.findAll({
     limit: 10
   }).then(function(videos) {
     if (videos) {
       console.log('HELLOOO');
       console.log(videos);
       res.send(videos);
     }
   }).catch(function(error) {
     res.send('Could not fetch most recent videos');
   });
});

}
