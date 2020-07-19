var express = require('express')
const  app = express()
const http = require('http').Server(app)

app.use(express.static('public'))
app.use(express.static('/assets'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public')
});

http.listen(5353, function () {
    console.log(`server started on http://localhost:5353`)
});
