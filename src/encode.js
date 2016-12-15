var btoa = require('btoa');
var fs = require('fs');
var path = require('path');

var encode = function( file, msg ){
  fs.readFile( file, function( err, data ){
    if(err) throw new Error( err );

    var b = new Buffer( data ).toString('base64');
    // split key - pre conversion
    var str = 'imageCode&' + msg;

    var b_encode = btoa(encodeURIComponent(str));

    var concat = b.split('=')[0] + b_encode;
    var binary = new Buffer( concat, 'base64').toString('binary');

    // regex for new filename
    var re = (/[a-z]+(?=\.(gif|jpg|jpeg|tiff|png)$)/i);

    var imageName = file.match( re )[0];
    var imageType = file.match( re )[1];

    var file_name = imageName + '_encode' + '.' + imageType;
    var dest = path.join( __dirname, '../tmp/' + file_name);

    fs.writeFile( dest, binary, 'binary', function(err){
      if(err) return console.log(err);
      console.log('File successfully saved at: ' + dest);
    });
  });
}

module.exports = encode;
