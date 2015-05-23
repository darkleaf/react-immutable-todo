var spdy = require('spdy'),
    path = require('path'),
    fs = require('fs');

var options = {
  key: fs.readFileSync(__dirname + '/keys/spdy-key.pem'),
  cert: fs.readFileSync(__dirname + '/keys/spdy-cert.pem'),
  ca: fs.readFileSync(__dirname + '/keys/spdy-csr.pem')
};

var server = spdy.createServer(options, function(request, response) {
  var url = request.url == '/' ? 'index.html' : request.url;
  var filename = path.join(__dirname, url);

  if ((filename.indexOf(__dirname) === 0) && fs.existsSync(filename) && fs.statSync(filename).isFile()) {
    response.writeHead(200);

    fs.createReadStream(filename).pipe(response);
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(3000, function() {
  var addr = this.address();
  console.log('Server is listening on %s:%d', addr.address, addr.port);
});
