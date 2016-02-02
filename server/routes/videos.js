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
  console.log(req.body.file_name);
    aws.config.update({accessKeyId: AWS_ACCESS_KEY , secretAccessKey: AWS_SECRET_KEY });
    aws.config.update({region: 'us-east-1' , signatureVersion: 'v4' });
    var s3 = new aws.S3();
    var s3_params = {
        Bucket: S3_BUCKET,
        Key: req.body.file_name,
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
                url: 'https://'+S3_BUCKET+'.s3.amazonaws.com/'+req.body.file_name
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
        where: {videoID: req.body.videoID}})
      .then(function(video) {
        if(video) {
            video.updateAttributes({
                title: req.body.title,
                description: req.body.description
            }).then(function(data) {
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
}
