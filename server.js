
var express = require('express'),
    app = express(),
    server = require('http').createServer(app)
server.listen(process.env.PORT || 4545 , () => {
  console.log('server started on http://localhost:4545')
});
app.use('/', express.static(__dirname + '/public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});
