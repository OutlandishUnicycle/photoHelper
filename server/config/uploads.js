require('es6-promise').polyfill(); // only need if fetch is brought back to be done here
require('isomorphic-fetch');
// var aws = require('../../secrets').aws;
var AWS = require('aws-sdk');
var s3 = new AWS.S3(); 
// var keys = aws || {};
// aws.key = aws.key || process.env.KEY;
// aws.secret = aws.secret || process.env.KEY;
AWS.config.update({region: 'us-west-1', accessKeyId: process.env.KEY, secretAccessKey: process.env.SECRET });

var s3bucket = new AWS.S3({params: {Bucket: 'discollect'}});

module.exports = {

  createNewListing: function(req, res) {
    console.log(process.env.KEY, process.env.SECRET);
    var name = req.body.title.replace(/[^a-zA-Z ]/g, "") + req.body.giverId; 
    console.log(name);
    var buf = new Buffer(req.body.picReference.replace(/^data:image\/\w+;base64,/, ""),'base64');

    var params = {
      Key: name, 
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
        res.send('https://s3-us-west-1.amazonaws.com/discollect/' + name);
      }
    });
  }
};