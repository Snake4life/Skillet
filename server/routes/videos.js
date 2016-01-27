var express = require('express');
var knox = require('knox');
var AWS = require('aws-sdk');
/*
var client = knox.createClient({
    key: 'AKIAIXKBT23U2MK5ZQYQ',
    secret: '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',
    bucket: 'd3jxcxdq69ksam.cloudfront.net'
});
*/


var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY;
var S3_BUCKET = process.env.S3_BUCKET_NAME;

AWS.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
AWS.config.region = 'us-east-1';

module.exports = function(app) {

  app.post('/api/uploadS3', function(req, res) {
    var videoFile = req.body;
//    var stream = fs.createReadStream(file.path)
    console.log('GOT TO THE UPLOAD SHIT');
    console.log(req.files.file1);
    res.send('Thank you for uploading!');
  });


  app.get('/api/S3', function(req, res) {
    var s3 = new AWS.S3();
    var params = {Bucket: S3_BUCKET, Key: req.query.name, ContentType: req.query.type};
    s3.getSignedUrl('putObject', params, function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            var return_data = {
                signedUrl: data,
                url: 'https://s3.amazonaws.com/'+params.Bucket+'/'+req.query.name
            };
            console.log(JSON.stringify(return_data));
            res.json(return_data);
            res.end();
        }
  });
});
}
