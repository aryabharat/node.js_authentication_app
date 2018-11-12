var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

http.createServer(function (req, res) {
    if(req.url === '/' )
    {
        fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }
    else if(req.url === '/index.html')
    {
      if (req.method === "POST")
      {
          var d = "";
          req.on("data", function(chunk)
          {
            d += chunk;
          });
          req.on("end", function(chunk)
          {
            var formdata = querystring.parse(d);
          //  console.log(formdata.username);
            if(formdata.username === "bharat" && formdata.pswd === "a@123")
            {
              console.log("login successful");
               fs.readFile('sucess.html', function(err, data) {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              res.end();
            });
            }
            else {
               console.log("unsuccessful");
               fs.readFile('unsucess.html', function(err, data) {
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               res.end();
            });
            }
          });
      }
    }

    else
    {
      fs.readFile('404.html', function(err, data) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      });
    }

}).listen(4000);
