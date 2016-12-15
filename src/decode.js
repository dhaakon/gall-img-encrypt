var atob = require('atob');
var fs = require('fs');

var decode = function( file ){
  // read the supplied image file
  fs.readFile( file, function( err, data ){
    if(err) throw new Error( err );

    // The code to split the base64 image string by
    var split_code = 'aW1hZ2VDb2RlJTI2';

    // Conver the image to base64
    var b = new Buffer( data ).toString('base64');

    var _result = b.split( split_code )[1];

    if( !_result ) throw new Error('No Message Detected');

    // convert the string so it's readable
    var decodedString = decodeURIComponent( atob( _result ) );

    console.log( 'The secret message: ' + decodedString );
  });
}

module.exports = decode;
