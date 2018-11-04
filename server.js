var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url === '/login' || req.url === '/' )
    {
      fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
    else
    {
      fs.readFile('404.html', function(err, data) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      });
    }
    if (req.method === "POST")
    {
      var data = "";
      req.on("data", function(chunk){
        data += chunk;
      });
      req.on("end", function(chunk){
        console.log(data);
      });

    }
}).listen(8080);
