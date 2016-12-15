var command = process.argv[2];

var imgFile, msg;

var path = require('path');
var encode = require('./src/encode.js');
var decode = require('./src/decode.js');

if( command === '--encode'){
  imgFile = process.argv[3];
  msg = process.argv[4];

  if( !(/\.(gif|jpg|jpeg|tiff|png)$/i).test(imgFile) ) throw new Error('Invalid FileType: Must be an Image File');
  else if(!msg) throw new Error('Invalid Message');
  else if(msg.length > 200) throw new Error('Invalid Character Length: Message must be less than 200 chars');

  imgFile = (imgFile[0] !== '.') ? imgFile : path.join( __dirname, imgFile );

  encode( imgFile, msg );
}else if( command === '--decode'){
  var imgFile = process.argv[3];

  imgFile = (imgFile[0] !== '.') ? imgFile : path.join( __dirname, imgFile );
  
  if( !(/\.(gif|jpg|jpeg|tiff|png)$/i).test(imgFile) ) throw new Error('Invalid FileType: Must be an Image File');

  decode( imgFile );

}else{
  throw new Error('Available commands: --encode, --decode');
}


