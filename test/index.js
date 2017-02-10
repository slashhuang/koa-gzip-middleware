/*
 * created by slashhuang
 * 2017.2.10
 */


var fs = require('fs');
var http = require('http');
var zlib = require('zlib');

http.createServer(function(req, res) {
 var file = fs.createReadStream('package.json');
 var acceptEncoding = req.headers['accept-encoding'];
 if(acceptEncoding && acceptEncoding.indexOf('gzip') != -1) {
  var gzipStream = zlib.createGzip();
  // 设置返回头content-encoding为gzip
  res.writeHead(200, {
   "content-encoding": "gzip"
  });
  file.pipe(gzipStream)
  .pipe(res);
 } else {
  res.writeHead(200);
  // 不压缩
  file.pipe(res);
 }
}).listen(8080);

console.log('server listening on port 8080')