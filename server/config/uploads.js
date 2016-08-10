require('es6-promise').polyfill(); // only need if fetch is brought back to be done here
require('isomorphic-fetch');
var aws = require('../../secrets').aws;
var AWS = require('aws-sdk');

var s3 = new AWS.S3(); 
AWS.config.update({region: 'us-west-1', accessKeyId: aws.key, secretAccessKey: aws.secret });

var s3bucket = new AWS.S3({params: {Bucket: 'discollect'}});

module.exports = {

  createNewListing: function(req, res) {
    var name = req.body.title.replace(/[^a-zA-Z ]/g, ""); 
    console.log(name);
    var buf = new Buffer(req.body.picReference.replace(/^data:image\/\w+;base64,/, ""),'base64');
    var params = {
      Key: name + req.body.giverId, 
      Body: buf, 
      ACL: 'public-read', 
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg',
    };
    s3bucket.upload(params, function(err, data) {
      if (err) {
        console.log("Error uploading data: ", err);
        res.send(301);
      } else {
        console.log("Successfully uploaded data to myBucket/myKey");
        res.send()
      }
    });
  }
};